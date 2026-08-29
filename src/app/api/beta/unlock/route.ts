import { NextResponse } from "next/server";
import {
  attachBetaAccessCookie,
  clearBetaAccessCookie,
  isBetaGateConfigured,
  isBetaPasswordValid,
} from "@/lib/beta-access";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const secure =
    new URL(request.url).protocol === "https:" || request.headers.get("x-forwarded-proto") === "https";

  if (!isBetaGateConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Private beta is not configured for this environment." },
      { status: 503, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  const payload = (await request.json().catch(() => null)) as { code?: unknown } | null;
  const code = typeof payload?.code === "string" ? payload.code.trim() : "";
  if (!code || code.length > 256) {
    return NextResponse.json(
      { ok: false, error: "A valid beta key is required." },
      { status: 400, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  if (!isBetaPasswordValid(code)) {
    return clearBetaAccessCookie(
      NextResponse.json(
        { ok: false, error: "That key did not open this instrument." },
        { status: 401, headers: { "Cache-Control": "private, no-store" } },
      ),
      secure,
    );
  }

  return attachBetaAccessCookie(
    NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "private, no-store" } },
    ),
    secure,
  );
}
