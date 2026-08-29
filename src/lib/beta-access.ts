import "server-only";

import { cookies } from "next/headers";
import type { NextResponse } from "next/server";
import {
  BETA_COOKIE_MAX_AGE_SECONDS,
  createBetaAccessCookieValue,
  isBetaAccessConfigured,
  isBetaPasswordMatch,
  normalizeBetaText,
  normalizeBetaVersion,
  verifyBetaAccessCookieValue,
  type BetaAccessConfig,
} from "@/lib/beta-access-core";

export const BETA_ACCESS_COOKIE_NAME = "pinecoene-beta-access";
type CookieStore = Awaited<ReturnType<typeof cookies>>;

export function getBetaAccessConfig(): BetaAccessConfig {
  return {
    password: normalizeBetaText(process.env.BETA_ACCESS_PASSWORD),
    signingSecret: normalizeBetaText(process.env.BETA_ACCESS_SECRET),
    version: normalizeBetaVersion(process.env.BETA_ACCESS_VERSION),
  };
}

export function isBetaGateConfigured(): boolean {
  return isBetaAccessConfigured(getBetaAccessConfig());
}

export function isBetaPasswordValid(code = ""): boolean {
  const config = getBetaAccessConfig();
  return isBetaAccessConfigured(config) && isBetaPasswordMatch(code, config.password);
}

export async function hasBetaAccess(cookieStore: CookieStore | null = null): Promise<boolean> {
  const store = cookieStore || (await cookies());
  return verifyBetaAccessCookieValue(
    store.get(BETA_ACCESS_COOKIE_NAME)?.value,
    getBetaAccessConfig(),
  );
}

function cookieOptions(secure: boolean) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure,
    path: "/",
    maxAge: BETA_COOKIE_MAX_AGE_SECONDS,
  };
}

export function attachBetaAccessCookie(response: NextResponse, secure: boolean): NextResponse {
  const value = createBetaAccessCookieValue(getBetaAccessConfig());
  if (value) response.cookies.set(BETA_ACCESS_COOKIE_NAME, value, cookieOptions(secure));
  return response;
}

export function clearBetaAccessCookie(response: NextResponse, secure: boolean): NextResponse {
  response.cookies.set(BETA_ACCESS_COOKIE_NAME, "", { ...cookieOptions(secure), maxAge: 0 });
  return response;
}
