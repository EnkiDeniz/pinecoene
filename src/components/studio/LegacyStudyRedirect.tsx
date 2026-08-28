"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadStudy } from "@/lib/custody";

export function LegacyStudyRedirect({ fixtureId,studyId }:{ fixtureId:string;studyId:string }) {
  const router=useRouter(); const [failed,setFailed]=useState(false);
  useEffect(() => { void loadStudy(studyId).then((study) => { if (!study || study.fixtureId !== fixtureId) { setFailed(true); return; } router.replace(`/studio/studies/${encodeURIComponent(studyId)}`); }).catch(() => setFailed(true)); },[fixtureId,router,studyId]);
  return <main className="typedUnavailable"><p className="instrumentEyebrow">LEGACY STUDY LINK</p><h1>{failed ? "This local study is not available." : "Moving the exact local study…"}</h1><p>{failed ? "The fixture binding did not validate. Nothing was substituted or deleted." : "The browser-local fixture binding is being verified before the URL changes."}</p>{failed ? <Link className="instrumentSecondary" href="/studio">Return to Studio</Link> : null}</main>;
}
