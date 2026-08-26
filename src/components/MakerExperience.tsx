"use client";

import { useMemo, useState } from "react";
import {
  Button,
  Label,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
} from "react-aria-components";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Check,
  DownloadSimple,
  Eye,
  LockSimple,
  Sparkle,
  X,
} from "@phosphor-icons/react";
import { SiteHeader } from "@/components/SiteHeader";
import { LocketStage } from "@/components/locket/LocketStage";
import {
  buildOfferingPackage,
  buildOwnerArchive,
  compileScore,
  createSourceEnvelope,
  finalizeExpression,
  hasCompleteAdmission,
  type Disposition,
  type HumanAdmissionV0_1,
  type MotionTemperament,
  type OfferingPackageV0_1,
  type OwnerArchiveV0_1,
  type ReadingCandidateSetV0_1,
  type SourceEnvelopeV0_1,
} from "@/lib/protocol";
import { newAdmissionDraft, readSourceManually } from "@/lib/reader";
import { downloadJson, savePinecoene } from "@/lib/custody";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MakerStep = "source" | "admission" | "expression" | "preview";

interface CompiledResult {
  ownerArchive: OwnerArchiveV0_1;
  offeringPackage: OfferingPackageV0_1;
}

const SAMPLE_RECORD =
  "I carried the question for years. The question returned whenever the room became quiet. I did not answer it. I learned to make a place where the question could remain open.";

export function MakerExperience() {
  const [step, setStep] = useState<MakerStep>("source");
  const [title, setTitle] = useState("");
  const [dedication, setDedication] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [source, setSource] = useState<SourceEnvelopeV0_1>();
  const [candidates, setCandidates] = useState<ReadingCandidateSetV0_1>();
  const [admission, setAdmission] = useState<Omit<HumanAdmissionV0_1, "admissionHash">>();
  const [temperament, setTemperament] = useState<MotionTemperament>("tender");
  const [compiled, setCompiled] = useState<CompiledResult>();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const reducedMotion = useReducedMotion();

  const dispositionCount = useMemo(() => {
    if (!candidates || !admission) return { done: 0, total: 0 };
    const all = [
      ...Object.values(admission.eventDispositions),
      ...Object.values(admission.relationDispositions),
      ...Object.values(admission.museDispositions),
    ];
    return { done: all.filter((value) => value !== "pending").length, total: all.length };
  }, [admission, candidates]);

  async function readRecord() {
    if (!sourceText.trim()) return;
    setBusy(true);
    setError("");
    try {
      const envelope = await createSourceEnvelope(title, sourceText);
      const reading = await readSourceManually(envelope);
      if (reading.events.length === 0) {
        throw new Error("The record needs at least one sentence or line.");
      }
      setSource(envelope);
      setCandidates(reading);
      setAdmission(newAdmissionDraft(reading));
      setStep("admission");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The record could not be read.");
    } finally {
      setBusy(false);
    }
  }

  function updateEvent(eventId: string, disposition: Disposition) {
    setAdmission((current) =>
      current
        ? {
            ...current,
            eventDispositions: {
              ...current.eventDispositions,
              [eventId]: disposition,
            },
          }
        : current,
    );
  }

  function updateRelation(relationId: string, disposition: "admit" | "reject") {
    setAdmission((current) =>
      current
        ? {
            ...current,
            relationDispositions: {
              ...current.relationDispositions,
              [relationId]: disposition,
            },
          }
        : current,
    );
  }

  function updateMuse(museId: string, disposition: "admit" | "reject") {
    setAdmission((current) =>
      current
        ? {
            ...current,
            museDispositions: {
              ...current.museDispositions,
              [museId]: disposition,
            },
          }
        : current,
    );
  }

  function disposeAllVisible() {
    if (!candidates || !admission) return;
    setAdmission({
      ...admission,
      eventDispositions: Object.fromEntries(
        candidates.events.map(({ eventId }) => [eventId, "admit"]),
      ),
      relationDispositions: Object.fromEntries(
        candidates.relations.map(({ relationId }) => [relationId, "admit"]),
      ),
      museDispositions: Object.fromEntries(
        candidates.muses.map(({ museId }) => [museId, "reject"]),
      ),
    });
  }

  async function compile() {
    if (!source || !candidates || !admission) return;
    setBusy(true);
    setError("");
    try {
      const { admission: finalizedAdmission, score } = await compileScore(
        source,
        candidates,
        admission,
      );
      const expression = await finalizeExpression(
        score.pinecoeneId,
        dedication,
        temperament,
      );
      const offeringPackage = await buildOfferingPackage(score, expression, {
        title: source.title,
        senderLabel: "The maker",
        standing: "implemented_local",
        mode: "local_preview",
      });
      const ownerArchive = await buildOwnerArchive(
        source,
        candidates,
        finalizedAdmission,
        score,
        expression,
      );
      await savePinecoene(ownerArchive, offeringPackage);
      setCompiled({ ownerArchive, offeringPackage });
      setPreviewOpen(false);
      setStep("preview");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The Pinecœne could not be compiled.");
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    setStep("source");
    setTitle("");
    setDedication("");
    setSourceText("");
    setSource(undefined);
    setCandidates(undefined);
    setAdmission(undefined);
    setCompiled(undefined);
    setPreviewOpen(false);
    setError("");
  }

  const complete =
    candidates && admission ? hasCompleteAdmission(candidates, admission) : false;

  return (
    <main className="maker">
      <SiteHeader />
      <header className="makerIntro">
        <p className="eyebrow">Standalone Genesis · browser-local prototype</p>
        <h1>Make a work that remembers how it was made.</h1>
        <p>
          Begin with exact words. A small deterministic reader proposes events;
          you decide what enters the form. Nothing leaves this browser.
        </p>
      </header>

      <ol className="makerProgress" aria-label="Creation progress">
        {[
          ["source", "Record"],
          ["admission", "Admit"],
          ["expression", "Animate"],
          ["preview", "Witness"],
        ].map(([id, label], index) => (
          <li key={id} data-current={step === id} data-complete={
            ["source", "admission", "expression", "preview"].indexOf(step) > index
          }>
            <span>{String(index + 1).padStart(2, "0")}</span>{label}
          </li>
        ))}
      </ol>

      {step === "source" ? (
        <section className="makerPanel sourcePanel" aria-labelledby="source-heading">
          <div className="panelHeading">
            <p className="eyebrow">01 · The exact record</p>
            <h2 id="source-heading">What should this Pinecœne remember?</h2>
            <p>
              The prototype reads sentence boundaries only. It does not infer
              truth, authorship, identity, or permission.
            </p>
          </div>
          <div className="sourceForm">
            <TextField className="field" value={title} onChange={setTitle}>
              <Label>Title</Label>
              <input placeholder="Untitled record" maxLength={80} />
            </TextField>
            <TextField
              className="field"
              value={sourceText}
              onChange={setSourceText}
              isRequired
            >
              <Label>Exact source</Label>
              <TextArea
                rows={9}
                maxLength={2000}
                placeholder="Paste or write a short story, letter, or record…"
              />
              <span className="fieldMeta">{sourceText.length} / 2,000</span>
            </TextField>
            <TextField className="field" value={dedication} onChange={setDedication}>
              <Label>Dedication</Label>
              <input placeholder="Optional words for the person who opens it" maxLength={140} />
            </TextField>
            <div className="sourceActions">
              <Button
                className="textButton"
                onPress={() => {
                  setTitle("The question that remained");
                  setDedication("For the part that did not need an answer.");
                  setSourceText(SAMPLE_RECORD);
                }}
              >
                Use a sample record
              </Button>
              <Button
                className="primaryButton"
                isDisabled={!sourceText.trim() || busy}
                onPress={() => void readRecord()}
              >
                {busy ? "Reading…" : "Read the record"} <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      {step === "admission" && candidates && admission ? (
        <section className="makerPanel admissionPanel" aria-labelledby="admission-heading">
          <div className="panelHeading admissionHeading">
            <div>
              <p className="eyebrow">02 · Owner admission</p>
              <h2 id="admission-heading">The reader proposes. You decide.</h2>
              <p>
                Every event, relation, and Muse must be disposed. Private and
                rejected material never enters the recipient package.
              </p>
            </div>
            <div className="dispositionMeter" aria-live="polite">
              <strong>{dispositionCount.done}</strong>
              <span>of {dispositionCount.total} decided</span>
            </div>
          </div>

          <div className="candidateSection">
            <div className="candidateSectionTitle">
              <h3>Events</h3>
              <Button className="textButton" onPress={disposeAllVisible}>
                Admit events and relations
              </Button>
            </div>
            <div className="candidateList">
              {candidates.events.map((event) => (
                <article className="candidateCard" key={event.eventId}>
                  <div className="candidateIndex">{event.eventId.replace("event-", "E")}</div>
                  <blockquote>{event.label}</blockquote>
                  <div className="dispositionActions" aria-label={`Disposition for ${event.label}`}>
                    {([
                      ["admit", Check, "Admit"],
                      ["private", LockSimple, "Private"],
                      ["reject", X, "Reject"],
                    ] as const).map(([value, Icon, label]) => (
                      <Button
                        key={value}
                        className="dispositionButton"
                        data-selected={admission.eventDispositions[event.eventId] === value}
                        onPress={() => updateEvent(event.eventId, value)}
                      >
                        <Icon aria-hidden="true" /> {label}
                      </Button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="candidateSection splitCandidates">
            <div>
              <h3>Relations</h3>
              {candidates.relations.length ? candidates.relations.map((relation) => (
                <article className="compactCandidate" key={relation.relationId}>
                  <p>{relation.fromEventId.replace("event-", "E")} <ArrowRight aria-hidden="true" /> {relation.toEventId.replace("event-", "E")}</p>
                  <div className="binaryActions">
                    <Button data-selected={admission.relationDispositions[relation.relationId] === "admit"} onPress={() => updateRelation(relation.relationId, "admit")}><Check aria-hidden="true" /> Keep</Button>
                    <Button data-selected={admission.relationDispositions[relation.relationId] === "reject"} onPress={() => updateRelation(relation.relationId, "reject")}><X aria-hidden="true" /> Reject</Button>
                  </div>
                </article>
              )) : <p className="emptyNote">One event needs no relation.</p>}
            </div>
            <div>
              <h3>Muse candidates</h3>
              {candidates.muses.length ? candidates.muses.map((muse) => (
                <article className="compactCandidate" key={muse.museId}>
                  <p><Sparkle aria-hidden="true" /> “{muse.label}” returned {muse.occurrences} times</p>
                  <div className="binaryActions">
                    <Button data-selected={admission.museDispositions[muse.museId] === "admit"} onPress={() => updateMuse(muse.museId, "admit")}><Check aria-hidden="true" /> Recognize</Button>
                    <Button data-selected={admission.museDispositions[muse.museId] === "reject"} onPress={() => updateMuse(muse.museId, "reject")}><X aria-hidden="true" /> Reject</Button>
                  </div>
                </article>
              )) : <p className="emptyNote">No repeated motif was proposed. Nothing has been invented.</p>}
            </div>
          </div>

          <div className="panelFooter">
            <Button className="quietButton" onPress={() => setStep("source")}><ArrowLeft aria-hidden="true" /> Revise source</Button>
            <Button className="primaryButton" isDisabled={!complete} onPress={() => setStep("expression")}>Continue to expression <ArrowRight aria-hidden="true" /></Button>
          </div>
        </section>
      ) : null}

      {step === "expression" ? (
        <section className="makerPanel expressionPanel" aria-labelledby="expression-heading">
          <div className="panelHeading">
            <p className="eyebrow">03 · Expression</p>
            <h2 id="expression-heading">Give the admitted form a temperament.</h2>
            <p>
              Expression changes pacing and sensory character. It cannot alter
              the admitted events, close the seam, or increase standing.
            </p>
          </div>
          <RadioGroup
            className="temperamentGroup"
            value={temperament}
            onChange={(value) => setTemperament(value as MotionTemperament)}
            aria-label="Motion temperament"
          >
            {([
              ["tender", "Tender", "A close, attentive opening with soft pauses."],
              ["solemn", "Solemn", "A measured opening with firmer weight."],
              ["ceremonial", "Ceremonial", "The longest opening, for a first encounter."],
            ] as const).map(([value, label, description]) => (
              <Radio key={value} value={value} className="temperamentCard">
                <span className="radioMark" />
                <strong>{label}</strong>
                <small>{description}</small>
              </Radio>
            ))}
          </RadioGroup>
          <div className="expressionTruth">
            <Archive aria-hidden="true" weight="light" />
            <p><strong>Luminous archival fold</strong><span>Vellum, fiber, warm brass joinery, one mineral-blue recurrence, and the OPEN seam.</span></p>
          </div>
          {error ? <p className="formError" role="alert">{error}</p> : null}
          <div className="panelFooter">
            <Button className="quietButton" onPress={() => setStep("admission")}><ArrowLeft aria-hidden="true" /> Return to admission</Button>
            <Button className="primaryButton" isDisabled={busy} onPress={() => void compile()}>{busy ? "Compiling…" : "Compile the Pinecœne"} <ArrowRight aria-hidden="true" /></Button>
          </div>
        </section>
      ) : null}

      {step === "preview" && compiled ? (
        <section className="makerPanel previewPanel" aria-labelledby="preview-heading">
          <div className="previewObject">
            <LocketStage
              className="makerLocket"
              opened={previewOpen}
              seed={compiled.offeringPackage.projection.topologySeed}
              temperament={temperament}
              reducedMotion={reducedMotion}
            />
          </div>
          <div className="previewContent">
            <p className="eyebrow">04 · Exact local Preview</p>
            <h2 id="preview-heading">{compiled.offeringPackage.offering.title}</h2>
            <blockquote>“{compiled.offeringPackage.offering.dedication || "A work held open."}”</blockquote>
            <p>{compiled.offeringPackage.disclosure}</p>
            <dl className="packageFacts">
              <div><dt>Events admitted</dt><dd>{compiled.offeringPackage.projection.events.length}</dd></div>
              <div><dt>Muses recognized</dt><dd>{compiled.offeringPackage.projection.muses.length}</dd></div>
              <div><dt>Standing</dt><dd>Implemented locally</dd></div>
              <div><dt>Package</dt><dd>{compiled.offeringPackage.packageHash.slice(0, 14)}</dd></div>
            </dl>
            <Button className="primaryButton" onPress={() => setPreviewOpen((value) => !value)}>
              {previewOpen ? "Close the Preview" : "Open the exact Preview"} <Eye aria-hidden="true" />
            </Button>
            <div className="downloadActions">
              <Button className="quietButton" onPress={() => downloadJson(`${compiled.ownerArchive.score.pinecoeneId}.pcn.owner.json`, compiled.ownerArchive)}><LockSimple aria-hidden="true" /> Private owner archive</Button>
              <Button className="quietButton" onPress={() => downloadJson(`${compiled.offeringPackage.offering.pinecoeneId}.pcn.offer.json`, compiled.offeringPackage)}><DownloadSimple aria-hidden="true" /> Recipient-safe package</Button>
            </div>
            <Button className="textButton startAgain" onPress={reset}>Make another Pinecœne</Button>
          </div>
        </section>
      ) : null}

      {error && step !== "expression" ? <p className="formError globalFormError" role="alert">{error}</p> : null}
    </main>
  );
}
