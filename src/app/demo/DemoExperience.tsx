"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";

import { StructurePlayer } from "@/features/instrument-demo/components/StructurePlayer";
import { createSyntheticSuccessor } from "@/features/instrument-demo/lib/compiler";
import { createSyntheticReturn } from "@/features/instrument-demo/lib/recipient-return";
import type {
  DemoState,
  InstrumentScene,
  ReturnProjectionV0_1,
  SyntheticSuccessorBundleV0_1,
} from "@/features/instrument-demo/lib/types";

import styles from "./demo.module.css";

const chapters = [
  { id: "premise", number: "00", label: "Projection", title: "The document is not the whole object." },
  { id: "candidate", number: "01", label: "Candidate", title: "A reading can propose structure. It cannot make it stand." },
  { id: "fold", number: "02", label: "Fold", title: "Standing gives selected relationships a durable form." },
  { id: "expression", number: "03", label: "Expression", title: "The same structure can become an instrument—or art." },
  { id: "aperture", number: "04", label: "Aperture", title: "Sharing compiles a smaller object before it renders." },
  { id: "encounter", number: "05", label: "Encounter", title: "The Locket is the vessel. The Pinecœne is what opens inside." },
  { id: "return", number: "06", label: "Return", title: "A response joins the lineage without rewriting the past." },
  { id: "passport", number: "07", label: "Passport", title: "Every beautiful claim ends in inspectable limits." },
] as const;

type ChapterId = (typeof chapters)[number]["id"];
type CandidateView = "proposed" | "q1Rejected" | "q2Moved";
type ApertureView = "wide" | "narrow";

function shortHash(value: string | null | undefined) {
  if (!value) return "NOT PRESENT";
  const plain = value.replace(/^sha256:/, "");
  return `${plain.slice(0, 10)}…${plain.slice(-8)}`;
}

function HashLine({ label, value, unchanged }: Readonly<{ label: string; value: string; unchanged?: boolean }>) {
  return (
    <div className={styles.hashLine}>
      <span>{label}</span>
      <code title={value}>{shortHash(value)}</code>
      {unchanged ? <strong>UNCHANGED</strong> : null}
    </div>
  );
}

function BoundaryStrip() {
  return (
    <div aria-label="Demonstration standing" className={styles.boundaryStrip}>
      <span>SYNTHETIC FIXTURE</span>
      <span>LOCAL INTERNAL DEMONSTRATION</span>
      <span>NO LIVE ŒDIT CONNECTION</span>
      <span>NO OBSERVED HUMAN ADMISSION</span>
      <span>NO REMOTE DELIVERY OR RECEIPT</span>
      <span>NO PUBLICATION OR RELEASE</span>
    </div>
  );
}

function CountLedger({ scene }: Readonly<{ scene: InstrumentScene }>) {
  return (
    <dl className={styles.countLedger}>
      <div><dt>points</dt><dd>{scene.points.length}</dd></div>
      <div><dt>relations</dt><dd>{scene.edges.length}</dd></div>
      <div><dt>surfaces</dt><dd>{scene.faces.length}</dd></div>
      <div><dt>OPEN</dt><dd>{scene.edges.filter((edge) => edge.open).length}</dd></div>
    </dl>
  );
}

function ToggleGroup({
  label,
  options,
  value,
  onChange,
}: Readonly<{
  label: string;
  options: readonly { value: string; label: string; note?: string }[];
  value: string;
  onChange: (value: string) => void;
}>) {
  return (
    <div className={styles.toggleGroup} aria-label={label}>
      {options.map((option) => (
        <button
          aria-pressed={option.value === value}
          data-active={option.value === value ? "true" : "false"}
          key={option.value}
          onClick={() => onChange(option.value)}
          type="button"
        >
          <span>{option.label}</span>
          {option.note ? <small>{option.note}</small> : null}
        </button>
      ))}
    </div>
  );
}

export function DemoExperience({
  demo,
  candidateScenes,
  calibrationScene,
}: Readonly<{
  demo: DemoState;
  candidateScenes: Record<CandidateView, InstrumentScene>;
  calibrationScene: InstrumentScene;
}>) {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [candidateView, setCandidateView] = useState<CandidateView>("proposed");
  const [expression, setExpression] = useState<"neutral" | "art">("neutral");
  const [aperture, setAperture] = useState<ApertureView>("wide");
  const [passportSpecimen, setPassportSpecimen] = useState<"fourth-point" | "papilloen">("fourth-point");
  const [returnText, setReturnText] = useState("Keep the gap visible; it is where my answer belongs.");
  const [returned, setReturned] = useState<ReturnProjectionV0_1 | null>(null);
  const [successor, setSuccessor] = useState<SyntheticSuccessorBundleV0_1 | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chapter = chapters[chapterIndex];
  const packageForAperture = demo.recipients[aperture];
  const recipientScene = aperture === "wide" ? demo.scenes.recipientWide : demo.scenes.recipientNarrow;

  const scene = useMemo(() => {
    const id: ChapterId = chapter.id;
    if (id === "premise" || id === "candidate") return candidateScenes[candidateView];
    if (id === "fold") return demo.scenes.fold;
    if (id === "expression") return expression === "art" ? demo.scenes.expression : demo.scenes.fold;
    if (id === "passport" && passportSpecimen === "papilloen") return calibrationScene;
    if (id === "passport") return demo.scenes.fold;
    return recipientScene;
  }, [calibrationScene, candidateScenes, candidateView, chapter.id, demo.scenes, expression, passportSpecimen, recipientScene]);

  const advance = () => setChapterIndex((current) => Math.min(chapters.length - 1, current + 1));
  const retreat = () => setChapterIndex((current) => Math.max(0, current - 1));

  const compileReturn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccessor(null);
    if (!returnText.trim()) {
      setError("The local Return needs exact words before it can be hashed.");
      return;
    }
    setIsCompiling(true);
    try {
      const next = await createSyntheticReturn(demo.recipients.wide, returnText.trim());
      setReturned(next);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The local Return could not be compiled.");
    } finally {
      setIsCompiling(false);
    }
  };

  const compileSuccessor = async () => {
    if (!returned) return;
    setError(null);
    setIsCompiling(true);
    try {
      const next = await createSyntheticSuccessor(demo.fixtureRecord, demo.normalForm, returned);
      setSuccessor(next);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The synthetic Successor could not be compiled.");
    } finally {
      setIsCompiling(false);
    }
  };

  return (
    <main className={styles.demoShell}>
      <header className={styles.masthead}>
        <Link className={styles.brand} href="/">
          <span>Pinecœne</span>
          <small>Instrument Demonstrator V0</small>
        </Link>
        <div className={styles.mastStatus}>
          <span>INTERNAL · SYNTHETIC · UNSEALED</span>
          <Link href="/">Leave demonstrator</Link>
        </div>
      </header>

      <BoundaryStrip />

      <section className={styles.opening} aria-labelledby="demo-title">
        <div>
          <p className={styles.eyebrow}>ONE OBJECT · EIGHT OPERATIONS · NO THEATRE OF AUTHORITY</p>
          <h1 id="demo-title">A document is a shadow.<br /><em>Pinecœne keeps the structure.</em></h1>
        </div>
        <div className={styles.openingCopy}>
          <p>
            A plan, poem, promise, or conversation puts one walk through a richer object onto a page. Œdit may one day reconstruct candidate structure from that authored projection. A human still decides what may stand.
          </p>
          <p>
            This instrument starts after reading. Its source is a synthetic fixture so the team can operate Pinecœne’s laws now—without pretending the Reader or authority system already exists.
          </p>
        </div>
        <ol className={styles.pipeline} aria-label="Product boundary">
          <li><span>authored projection</span><strong>document</strong></li>
          <li><span>candidate reconstruction</span><strong>Œdit / fixture</strong></li>
          <li><span>standing decision</span><strong>human authority</strong></li>
          <li><span>normal form</span><strong>Pinecœne</strong></li>
          <li><span>recipient projection</span><strong>Encounter</strong></li>
        </ol>
      </section>

      <nav aria-label="Demonstrator chapters" className={styles.chapterRail}>
        {chapters.map((item, index) => (
          <button
            aria-current={index === chapterIndex ? "step" : undefined}
            data-active={index === chapterIndex ? "true" : "false"}
            key={item.id}
            onClick={() => setChapterIndex(index)}
            type="button"
          >
            <span>{item.number}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </nav>

      <section className={styles.chapterHeader}>
        <div>
          <p className={styles.eyebrow}>BEAT {chapter.number} / {chapter.label}</p>
          <h2>{chapter.title}</h2>
        </div>
        <p>{chapterIndex + 1} of {chapters.length}</p>
      </section>

      <section className={styles.workbench}>
        <aside className={styles.lesson} aria-label={`${chapter.label} operation`}>
          {chapter.id === "premise" ? (
            <>
              <p className={styles.lessonLead}>The first distinction is the whole product.</p>
              <div className={styles.projectionFigure} aria-label="Interior to Pinecoene to document">
                <span>richer interior</span><i>→</i><strong>Pinecœne</strong><i>→</i><span>authored document</span>
              </div>
              <p>A Pinecœne is not a claim to contain thought itself. It is a bounded normal form that preserves the relationships a lawful record can support.</p>
              <p className={styles.lessonBoundary}>The scene beside you is still candidate material. Beauty does not upgrade it.</p>
            </>
          ) : null}

          {chapter.id === "candidate" ? (
            <>
              <p className={styles.lessonLead}>Operate the proposal before anything is allowed to become Solid.</p>
              <ToggleGroup
                label="Candidate dependency operation"
                onChange={(value) => setCandidateView(value as CandidateView)}
                options={[
                  { value: "proposed", label: "Both alternatives", note: "Q1 + Q2 coexist" },
                  { value: "q1Rejected", label: "Reject Q1", note: "dependants disappear" },
                  { value: "q2Moved", label: "Move Q2", note: "dependants recompute" },
                ]}
                value={candidateView}
              />
              <CountLedger scene={scene} />
              <HashLine label="candidate scene" value={scene.sceneHash} />
              <p className={styles.lessonBoundary}>Candidate identity exists. Pinecœne work identity does not. No candidate surface is a Fold.</p>
            </>
          ) : null}

          {chapter.id === "fold" ? (
            <>
              <p className={styles.lessonLead}>For this demo, a separate authored fixture selects Q2, omits Q1, and keeps one relation OPEN.</p>
              <CountLedger scene={scene} />
              <div className={styles.lawList}>
                <p><span>Q2</span><strong>fixture included</strong></p>
                <p><span>Q1</span><strong>absent</strong></p>
                <p><span>Q2 → C</span><strong>OPEN · gap preserved</strong></p>
              </div>
              <HashLine label="semantic" value={demo.fixtureRecord.semanticHash} />
              <HashLine label="normal form" value={demo.normalForm.normalFormHash} />
              <p className={styles.lessonBoundary}>This is fixture authorship, not an observed human Admission. The standing survives every view.</p>
            </>
          ) : null}

          {chapter.id === "expression" ? (
            <>
              <p className={styles.lessonLead}>Change everything a person may feel—without changing what the object means.</p>
              <ToggleGroup
                label="Expression"
                onChange={(value) => setExpression(value as "neutral" | "art")}
                options={[
                  { value: "neutral", label: "Instrument", note: "sparse structure" },
                  { value: "art", label: "Christmas Tree", note: "one authored Expression" },
                ]}
                value={expression}
              />
              <HashLine label="normal form" unchanged value={demo.normalForm.normalFormHash} />
              <HashLine
                label="expression"
                value={expression === "art" ? demo.expressions.christmasTree.expressionHash : demo.expressions.neutral.expressionHash}
              />
              <p className={styles.lessonBoundary}>Lights, metaphor, palette, and choreography may change. Entities, relations, standing, OPEN, and identity may not.</p>
            </>
          ) : null}

          {chapter.id === "aperture" ? (
            <>
              <p className={styles.lessonLead}>Aperture is compilation, not CSS hiding. Narrowing it changes recipient-controlled bytes.</p>
              <ToggleGroup
                label="Recipient aperture"
                onChange={(value) => setAperture(value as ApertureView)}
                options={[
                  { value: "wide", label: "Team wide", note: "inspect + Return" },
                  { value: "narrow", label: "Public narrow", note: "view only" },
                ]}
                value={aperture}
              />
              <CountLedger scene={recipientScene} />
              <HashLine label="package" value={packageForAperture.packageHash} />
              <div className={styles.capabilityRow}>
                {packageForAperture.projection.capabilities.map((capability) => <span key={capability}>{capability}</span>)}
              </div>
              <p className={styles.lessonBoundary}>Owner-private point P and every consequence of it are absent from both packages. Team-only material disappears from the narrow package.</p>
            </>
          ) : null}

          {chapter.id === "encounter" ? (
            <>
              <p className={styles.lessonLead}>Preview and Witness resolve the same immutable package into the same Player input.</p>
              <div className={styles.packageCard}>
                <span>LOCAL OFFERING DEMONSTRATION</span>
                <strong>{packageForAperture.apertureProfile.replaceAll("_", " ")}</strong>
                <code>{shortHash(packageForAperture.packageHash)}</code>
              </div>
              <Link className={styles.primaryAction} href={`/demo/w/${packageForAperture.packageId}`}>
                Open exact local Witness <span>↗</span>
              </Link>
              <p className={styles.lessonBoundary}>The link simulates no send, delivery, receipt, or acceptance. It resolves an immutable fixture package inside this build.</p>
            </>
          ) : null}

          {chapter.id === "return" ? (
            <>
              <p className={styles.lessonLead}>Author exact words against the wide Encounter. The predecessor must remain byte-identical.</p>
              <form className={styles.returnForm} onSubmit={compileReturn}>
                <label htmlFor="demo-return">Unfinished sentence</label>
                <textarea
                  id="demo-return"
                  onChange={(event) => { setReturnText(event.target.value); setReturned(null); setSuccessor(null); }}
                  rows={4}
                  value={returnText}
                />
                <button disabled={isCompiling} type="submit">{isCompiling ? "Compiling…" : "Create immutable local Return"}</button>
              </form>
              {error ? <p className={styles.error} role="alert">{error}</p> : null}
              {returned ? (
                <div className={styles.receipt}>
                  <p><span>RETURN</span><strong>LOCAL · SYNTHETIC</strong></p>
                  <HashLine label="Return" value={returned.returnHash} />
                  <HashLine label="predecessor" unchanged value={demo.normalForm.normalFormHash} />
                  <button disabled={isCompiling} onClick={compileSuccessor} type="button">Create fixture-authored synthetic Successor</button>
                </div>
              ) : null}
              {successor ? (
                <div className={styles.successorReceipt}>
                  <p>NEW IDENTITY · PREDECESSOR PRESERVED</p>
                  <strong>{successor.normalForm.pinecoeneId}</strong>
                  <HashLine label="successor" value={successor.normalForm.normalFormHash} />
                  <HashLine label="lineage" value={successor.link.successorLinkHash} />
                </div>
              ) : null}
            </>
          ) : null}

          {chapter.id === "passport" ? (
            <>
              <p className={styles.lessonLead}>Swap the data, not the component. The same Player accepts a second exact graph specimen.</p>
              <ToggleGroup
                label="Passport specimen"
                onChange={(value) => setPassportSpecimen(value as "fourth-point" | "papilloen")}
                options={[
                  { value: "fourth-point", label: "Fourth Point", note: "primary fixture" },
                  { value: "papilloen", label: "Papillœn", note: "data-only calibration" },
                ]}
                value={passportSpecimen}
              />
              <HashLine label="scene" value={scene.sceneHash} />
              {scene.normalFormHash ? <HashLine label="normal form" value={scene.normalFormHash} /> : null}
              <div className={styles.passportTruth}>
                <p><strong>Real here</strong><span>hashing, validation, dependency closure, structure, Expression invariance, Aperture, Return immutability</span></p>
                <p><strong>Not here</strong><span>live reading, Admission receipts, accounts, transport, publication, Seal</span></p>
              </div>
            </>
          ) : null}
        </aside>

        <div className={styles.playerWrap}>
          <StructurePlayer
            expressionVariant={
              (chapter.id === "expression" && expression === "art") ||
              ["aperture", "encounter", "return"].includes(chapter.id)
                ? "art"
                : "neutral"
            }
            key={`${chapter.id}-${scene.sceneId}`}
            scene={scene}
          />
        </div>
      </section>

      <footer className={styles.chapterFooter}>
        <button disabled={chapterIndex === 0} onClick={retreat} type="button">← Previous operation</button>
        <p><span>{chapter.number}</span>{chapter.label}</p>
        {chapterIndex < chapters.length - 1 ? (
          <button onClick={advance} type="button">Next: {chapters[chapterIndex + 1].label} →</button>
        ) : (
          <a href="#demo-title">Return to beginning ↑</a>
        )}
      </footer>
    </main>
  );
}
