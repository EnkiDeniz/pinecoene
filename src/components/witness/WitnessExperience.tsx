"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleNotch, Info, LockKey, SealCheck, X } from "@phosphor-icons/react";
import { FormStage } from "@/components/form/FormStage";
import { LocketStage } from "@/components/locket/LocketStage";
import { createReturnCandidate } from "@/lib/studio-compiler";
import { deleteReturnCandidate, loadOfferingV2, saveReturnCandidate } from "@/lib/custody";
import type { OfferingPackageV0_2, ReturnCandidateV0_1 } from "@/lib/studio-contracts";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type WitnessState = "overture" | "opening" | "witness" | "declined";

export function WitnessExperience({ offeringId, fallbackOffering }: { offeringId:string; fallbackOffering:OfferingPackageV0_2 }) {
  const [offering, setOffering] = useState(fallbackOffering);
  const [state, setState] = useState<WitnessState>("overture");
  const [returnText, setReturnText] = useState("");
  const [mayBecomeMuse, setMayBecomeMuse] = useState(false);
  const [withdrawalAllowed, setWithdrawalAllowed] = useState(true);
  const [savedReturn, setSavedReturn] = useState<ReturnCandidateV0_1>();
  const [selectedFeature, setSelectedFeature] = useState("");
  const [inspection, setInspection] = useState("");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    void loadOfferingV2(offeringId).then((local) => { if (local) setOffering(local); });
  }, [offeringId]);

  const rank = Number(offering.resolution.slice(1));
  const anatomy = useMemo(() => offering.recipientScene?.features ?? [], [offering.recipientScene]);

  async function foldReturn() {
    if (!returnText.trim() || !offering.permissions.createReturn) return;
    const candidate = await createReturnCandidate(offering.offeringId, returnText, offering.permissions.allowMuseReuse && mayBecomeMuse, offering.permissions.allowWithdrawal && withdrawalAllowed);
    await saveReturnCandidate(candidate);
    setSavedReturn(candidate);
  }

  async function withdrawReturn() {
    if (!savedReturn || !savedReturn.withdrawalAllowed) return;
    await deleteReturnCandidate(savedReturn.returnId);
    setSavedReturn(undefined);
    setReturnText("");
  }

  if (state === "declined") {
    return <main className="witnessDeclined"><X aria-hidden="true" /><p className="instrumentEyebrow">LOCAL DECLINE · NOT TRANSMITTED</p><h1>The Locket remains closed.</h1><p>No acceptance, refusal, receipt or delivery was recorded outside this browser.</p><Link className="instrumentSecondary" href="/sketches"><ArrowLeft aria-hidden="true" /> Return to Sketches</Link></main>;
  }

  return (
    <main className={`witnessExperience state-${state}`}>
      <header className="instrumentTopbar witnessTopbar"><Link className="instrumentBrand" href="/"><ArrowLeft aria-hidden="true" /> Pinecœne <span>Encounter · Locket vessel</span></Link><div className="artifactIdentity"><strong>{offering.resolution} · {offering.fixtureId}</strong><span>{offering.standing.replaceAll("_"," ")}</span></div><nav aria-label="Encounter navigation"><Link href="/sketches">Sketches</Link></nav></header>
      {state === "overture" || state === "opening" ? (
        <section className="locketEncounter">
          <div className="locketIdentity"><p className="instrumentEyebrow">AN OFFERING FROM {offering.senderLabel.toUpperCase()}</p><h1>{offering.title}</h1><p>{offering.expression.dedication}</p></div>
          <LocketStage className="encounterLocket" opened={state === "opening"} seed={offering.packageHash} temperament={offering.expression.temperament} reducedMotion={reducedMotion} onOpened={() => setState("witness")} />
          <div className="locketActions">{state === "overture" ? <><button className="instrumentPrimary" onClick={() => setState("opening")}>Open the Locket <ArrowRight aria-hidden="true" /></button><button className="instrumentSecondary" onClick={() => setState("declined")}>Not now</button></> : <><p>The vessel is opening. The granted {offering.resolution} projection waits inside.</p><button className="instrumentSecondary" onClick={() => setState("witness")}>Skip to the settled Encounter</button></>}</div>
          <p className="locketTruth"><LockKey aria-hidden="true" /> Locket = permission vessel · Fold = the work it carries</p>
        </section>
      ) : (
        <>
          <section className="witnessStage">
            <div className="witnessObject">
              <div className="stageTelemetry"><span>{offering.resolution} · RECIPIENT WITNESS</span><span>{offering.address.toUpperCase()}</span><span>{offering.packageHash.slice(0,12)}</span></div>
              {offering.recipientScene ? <FormStage scene={offering.recipientScene} reducedMotion={reducedMotion} selectedFeature={selectedFeature} onFeatureSelect={(detail) => { setSelectedFeature(detail.featureId); setInspection(detail.inspectionCopy); }} /> : <div className="witnessMark"><span>{offering.resolution}</span><h1>{offering.title}</h1><p>The owner granted a Mark or Trace, not the settled Form.</p></div>}
              <div className="stageCaption"><p>{inspection || (rank >= 2 ? "The Fold has arrived at rest." : "The permitted record arrives without the Fold.")}</p><span>EXACT PACKAGE · NO OWNER-ONLY DATA</span></div>
            </div>
            <aside className="witnessInspector">
              <header className="inspectorHeading"><p className="instrumentEyebrow">GRANTED RESOLUTION</p><h2>{offering.resolution} · {rank >= 2 ? "Form" : rank === 1 ? "Trace" : "Mark"}</h2><p>Only what the Offering package permits is present in this renderer.</p></header>
              {offering.recipientRecord.length ? <section className="inspectorSection"><h3>Permitted record</h3><ol className="recordEvents">{offering.recipientRecord.map((event) => <li key={event.eventId}><span>{event.eventId} · {event.role}</span><strong>{event.label}</strong></li>)}</ol></section> : null}
              {rank >= 3 && anatomy.length ? <section className="inspectorSection anatomyRows">{anatomy.map((feature) => <button key={feature.featureId} data-selected={selectedFeature === feature.featureId} onClick={() => { setSelectedFeature(feature.featureId); setInspection(feature.inspectionCopy); }}><span>{feature.materialRole}</span><strong>{feature.kind.replaceAll("_"," ")}</strong><small>{feature.semanticRefs.length} refs</small></button>)}</section> : null}
              <section className="inspectorSection packageDisclosure"><Info aria-hidden="true" /><p>{offering.disclosure}</p><dl className="microLedger"><div><dt>Resolution</dt><dd>{offering.resolution}</dd></div><div><dt>Address</dt><dd>{offering.address}</dd></div><div><dt>Package</dt><dd>{offering.packageHash.slice(0,10)}</dd></div></dl></section>
            </aside>
          </section>
          <section className="recipientReturn">
            <div className="returnCopy"><p className="instrumentEyebrow">RETURN · RECIPIENT AUTHORSHIP</p><h2>You may answer<br /><em>without becoming evidence.</em></h2><p>{offering.permissions.createReturn ? "A Return is your exact local text. Muse reuse is a separate permission and remains off unless you choose it." : "This Offering does not grant Return creation."}</p></div>
            {offering.permissions.createReturn ? <div className="returnComposer">{savedReturn ? <div className="returnSettled"><Check aria-hidden="true" /><p className="instrumentEyebrow">RETURN FOLDED LOCALLY</p><blockquote>{savedReturn.exactText}</blockquote><small>This is a browser-local candidate, not sent, received or accepted.</small>{savedReturn.withdrawalAllowed ? <button className="instrumentSecondary" onClick={() => void withdrawReturn()}>Withdraw local candidate</button> : null}<Link className="instrumentPrimary" href={`/sketches/${offering.fixtureId}?study=${offering.studyId ?? ""}`}>Review in owner sketch <ArrowRight aria-hidden="true" /></Link></div> : <><label>Your exact words<textarea rows={6} value={returnText} onChange={(event) => setReturnText(event.target.value)} placeholder="Write only what you want to keep here…" /></label><label className="permissionCheck"><input type="checkbox" checked={mayBecomeMuse} disabled={!offering.permissions.allowMuseReuse} onChange={(event) => setMayBecomeMuse(event.target.checked)} /><span><strong>May become Muse material</strong><small>{offering.permissions.allowMuseReuse ? "Off by default; still requires owner recognition." : "Denied by this Offering package."}</small></span></label><label className="permissionCheck"><input type="checkbox" checked={withdrawalAllowed} disabled={!offering.permissions.allowWithdrawal} onChange={(event) => setWithdrawalAllowed(event.target.checked)} /><span><strong>May be withdrawn</strong><small>{offering.permissions.allowWithdrawal ? "On by default in this local simulation." : "Not offered by this package."}</small></span></label><button className="instrumentPrimary" disabled={!returnText.trim()} onClick={() => void foldReturn()}>Fold this Return locally <ArrowRight aria-hidden="true" /></button></>}</div> : <div className="returnUnavailable"><CircleNotch aria-hidden="true" /><p>Return capacity was not included at {offering.resolution}.</p></div>}
          </section>
          <footer className="witnessFooter"><span><SealCheck aria-hidden="true" /> AT REST · NOT FINISHED</span><span>{offering.schemaVersion}</span></footer>
        </>
      )}
    </main>
  );
}
