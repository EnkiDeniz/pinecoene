import { NextResponse } from "next/server";

import {
  createInstrumentDemoState,
  findRecipientPackage,
} from "@/features/instrument-demo/lib/compiler";

const responseHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ packageId: string }> },
) {
  const { packageId } = await params;
  const demo = await createInstrumentDemoState();
  const encounter = findRecipientPackage(demo, packageId);

  if (!encounter) {
    return NextResponse.json(
      { error: "package_not_found" },
      { status: 404, headers: responseHeaders },
    );
  }

  const scene = encounter.apertureProfile === "team_wide"
    ? demo.scenes.recipientWide
    : demo.scenes.recipientNarrow;

  return NextResponse.json(
    { encounter, scene },
    { status: 200, headers: responseHeaders },
  );
}
