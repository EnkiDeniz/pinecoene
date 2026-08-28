"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { StudioInstrument } from "@/components/studio/StudioInstrument";
import { loadStudy } from "@/lib/custody";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";
import type { CompiledStudioArtifact } from "@/lib/studio-contracts";

export function LocalStudyRoute({ studyId }:{ studyId:string }) {
  const [artifact,setArtifact] = useState<CompiledStudioArtifact>();
  const [unavailable,setUnavailable] = useState(false);
  useEffect(() => { let alive=true; void loadStudy(studyId).then(async (study) => { if (!study) { if (alive) setUnavailable(true); return; } const manifest=await getFixtureManifest(study.fixtureId); if (manifest.fixtureHash !== study.fixtureHash) { if (alive) setUnavailable(true); return; } const compiled=await compileStudioArtifact(manifest,{ decisions:study.decisions,address:study.address,study }); if (alive) setArtifact(compiled); }).catch(() => { if (alive) setUnavailable(true); }); return () => { alive=false; }; },[studyId]);
  if (unavailable) return <main className="typedUnavailable"><p className="instrumentEyebrow">LOCAL STUDY UNAVAILABLE</p><h1>This study could not be opened.</h1><p>No fixture was substituted. Existing browser data was not changed.</p><Link className="instrumentSecondary" href="/studio">Return to Studio</Link></main>;
  if (!artifact) return <main className="typedUnavailable"><p className="instrumentEyebrow">LOCAL CUSTODY</p><h1>Resolving the exact study…</h1></main>;
  return <StudioInstrument initialArtifact={artifact} studyId={studyId} />;
}
