import type { Metadata } from "next";
import Link from "next/link";
import { LazyPublicForm } from "@/components/public/LazyPublicForm";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";
import { getPublicDoorReleaseManifest } from "@/lib/public-release";

export const metadata:Metadata = { title:"Works", description:"One published Pinecœne, one origin record still being curated, and one honesty test still owed." };

export default async function WorksPage() {
  const [artifact] = await Promise.all([compileStudioArtifact(await getFixtureManifest("pcn-0001")),getPublicDoorReleaseManifest()]);
  return <main className="worksPage"><header className="worksOpening"><p className="publicEyebrow">WORKS · PUBLIC DOOR V0.2</p><h1>What exists,<br /><em>and what does not yet.</em></h1><p>One Pinecœne has earned public standing. The origin conversation is still being curated. The honesty test remains visibly owed.</p></header><section className="worksLedger" aria-label="Pinecœne works"><article className="publishedWork"><div className="worksObject"><LazyPublicForm scene={artifact.conformation.scene} /></div><div className="worksCopy"><span>01 · PUBLISHED WORK · FIXTURE-AUTHORED</span><h2>Genesis</h2><p>A beginning, distinctions, evaluations, Returns, intervals, and a final edge withheld by law.</p><dl><div><dt>Phases</dt><dd>7</dd></div><div><dt>Standing</dt><dd>OPEN</dd></div><div><dt>Form</dt><dd>Nested tetrahedron</dd></div></dl><Link href="/works/genesis">Open this work</Link></div></article><article className="editorialWork"><span>02 · CURATION IN PROGRESS</span><h2>The Genesis Chat</h2><p>The origin conversation exists. Its public record and identity are still being reconciled. No Fold, replay, poster, or work route is being invented in the meantime.</p><small>ORIGIN BINDING UNRESOLVED · NOT A PUBLISHED WORK</small></article><article className="editorialWork owedWork"><span>03 · OWED EXPERIMENT</span><h2>The Thin Fold</h2><p>Can a sparse record remain honestly thin and still become beautiful? The experiment has not been run. Its empty place is the result we can truthfully show today.</p><Link href="/next#thin-fold">Read the owed test</Link></article></section><footer className="worksClosing"><p>Works appear here only after they earn a public identity, permitted projection, replay, poster, and human publication decision.</p></footer></main>;
}
