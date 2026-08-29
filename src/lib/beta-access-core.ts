import { createHmac, timingSafeEqual } from "node:crypto";

export const BETA_COOKIE_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const BETA_COOKIE_MAX_AGE_MS = BETA_COOKIE_MAX_AGE_SECONDS * 1000;

export type BetaAccessConfig = {
  password?: string;
  signingSecret?: string;
  version?: string;
};

export function normalizeBetaText(value: string | undefined | null = ""): string {
  return String(value ?? "").trim();
}

export function normalizeBetaVersion(value: string | undefined | null = ""): string {
  return normalizeBetaText(value) || "1";
}

export function isBetaAccessConfigured(config: BetaAccessConfig): boolean {
  return Boolean(normalizeBetaText(config.password) && normalizeBetaText(config.signingSecret));
}

export function safeEqualBetaText(left = "", right = ""): boolean {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function isBetaPasswordMatch(submittedCode = "", expectedPassword = ""): boolean {
  const submitted = normalizeBetaText(submittedCode);
  const expected = normalizeBetaText(expectedPassword);

  return Boolean(submitted && expected) && safeEqualBetaText(submitted.toLowerCase(), expected.toLowerCase());
}

function signingKey(config: BetaAccessConfig): string {
  if (!isBetaAccessConfigured(config)) return "";
  return [
    normalizeBetaText(config.signingSecret),
    normalizeBetaText(config.password),
    normalizeBetaVersion(config.version),
  ].join(":");
}

function signPayload(payload: string, config: BetaAccessConfig): string {
  const key = signingKey(config);
  return key && payload ? createHmac("sha256", key).update(payload).digest("base64url") : "";
}

export function createBetaAccessCookieValue(config: BetaAccessConfig, issuedAt = Date.now()): string {
  if (!isBetaAccessConfigured(config)) return "";

  const payload = Buffer.from(
    JSON.stringify({
      v: 1,
      gateVersion: normalizeBetaVersion(config.version),
      iat: Number.isFinite(issuedAt) ? issuedAt : Date.now(),
    }),
  ).toString("base64url");
  const signature = signPayload(payload, config);

  return signature ? `${payload}.${signature}` : "";
}

export function verifyBetaAccessCookieValue(
  value = "",
  config: BetaAccessConfig,
  now = Date.now(),
): boolean {
  if (!isBetaAccessConfigured(config)) return false;

  const [payload, signature] = String(value).split(".");
  if (!payload || !signature) return false;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      gateVersion?: string;
      iat?: number;
    };

    if (normalizeBetaVersion(parsed.gateVersion) !== normalizeBetaVersion(config.version)) return false;
    if (
      !Number.isFinite(parsed.iat) ||
      Number(parsed.iat) > now + 60_000 ||
      now - Number(parsed.iat) > BETA_COOKIE_MAX_AGE_MS
    ) {
      return false;
    }
  } catch {
    return false;
  }

  const expectedSignature = signPayload(payload, config);
  return Boolean(expectedSignature) && safeEqualBetaText(signature, expectedSignature);
}
