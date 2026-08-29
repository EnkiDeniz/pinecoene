import { NextRequest, NextResponse } from "next/server";

const ACCESS_PATH = "/access";
const UNLOCK_PATH = "/api/beta/unlock";
const BETA_ACCESS_COOKIE_NAME = "pinecoene-beta-access";
const PUBLIC_INFRASTRUCTURE_PATHS = new Set(["/icon.svg", "/robots.txt"]);
const COOKIE_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

function normalize(value: string | undefined = ""): string {
  return String(value || "").trim();
}

function betaConfig() {
  return {
    password: normalize(process.env.BETA_ACCESS_PASSWORD),
    signingSecret: normalize(process.env.BETA_ACCESS_SECRET),
    version: normalize(process.env.BETA_ACCESS_VERSION) || "1",
  };
}

function decodeBase64Url(value: string): string {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  return atob(padded);
}

function encodeBase64Url(bytes: ArrayBuffer): string {
  const binary = String.fromCharCode(...new Uint8Array(bytes));
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function safeEqual(left = "", right = ""): boolean {
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index += 1) {
    diff |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return diff === 0;
}

async function signPayload(payload: string): Promise<string> {
  const config = betaConfig();
  if (!config.password || !config.signingSecret || !payload) return "";

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode([config.signingSecret, config.password, config.version].join(":")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return encodeBase64Url(
    await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload)),
  );
}

async function isUnlocked(cookieValue = ""): Promise<boolean> {
  const [payload, signature] = cookieValue.split(".");
  if (!payload || !signature) return false;

  try {
    const parsed = JSON.parse(decodeBase64Url(payload)) as { gateVersion?: string; iat?: number };
    const config = betaConfig();
    if (normalize(parsed.gateVersion) !== config.version) return false;
    if (
      !Number.isFinite(parsed.iat) ||
      Number(parsed.iat) > Date.now() + 60_000 ||
      Date.now() - Number(parsed.iat) > COOKIE_MAX_AGE_MS
    ) {
      return false;
    }
  } catch {
    return false;
  }

  const expected = await signPayload(payload);
  return Boolean(expected) && safeEqual(signature, expected);
}

function lockedApiResponse() {
  return NextResponse.json(
    { error: "Private beta access required.", code: "BETA_ACCESS_REQUIRED" },
    {
      status: 401,
      headers: {
        "Cache-Control": "private, no-store, max-age=0, must-revalidate",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    },
  );
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname === ACCESS_PATH ||
    pathname === UNLOCK_PATH ||
    PUBLIC_INFRASTRUCTURE_PATHS.has(pathname)
  ) {
    return NextResponse.next();
  }

  const config = betaConfig();
  const configured = Boolean(config.password && config.signingSecret);
  const unlocked = configured
    ? await isUnlocked(request.cookies.get(BETA_ACCESS_COOKIE_NAME)?.value || "")
    : false;

  if (unlocked) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store, max-age=0, must-revalidate");
    return response;
  }

  if (
    pathname.startsWith("/api/") ||
    pathname.endsWith(".json") ||
    (request.method !== "GET" && request.method !== "HEAD")
  ) {
    return lockedApiResponse();
  }

  const response = NextResponse.rewrite(new URL(ACCESS_PATH, request.url));
  response.headers.set("Cache-Control", "private, no-store, max-age=0, must-revalidate");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = {
  matcher: ["/((?!_next/|_vercel/).*)"],
};
