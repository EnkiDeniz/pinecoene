import Link from "next/link";
import { LazyPublicForm } from "@/components/public/LazyPublicForm";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";

export async function CurrentSketch() {
  const artifact = await compileStudioArtifact(await getFixtureManifest("pcn-0002"));
  return (
    <section className="currentSketch" aria-labelledby="current-sketch-title">
      <div className="currentSketchStage"><LazyPublicForm scene={artifact.conformation.scene} /></div>
      <div className="currentSketchCopy">
        <p className="publicEyebrow">WHAT EXISTS TODAY</p>
        <h2 id="current-sketch-title">A sketch. Not the theorem.</h2>
        <p className="sketchIdentity">PCN-0002 · This Chat<br />fixture-authored · immutable · open<br /><br />Six phases seal.<br />The seventh does not.</p>
        <p>The current browser objects are curated, deterministic studies. They test whether authored records, explicit decisions, OPEN states, source-linked events, local custody, and materially different forms can remain inspectable.</p>
        <p>They do not prove arbitrary source reading, owner-authored production Folds, transport, contact, consciousness, or mind reading.</p>
        <Link className="publicPrimary" href="/sketches/pcn-0002" prefetch={false}>Open in Sketches <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
