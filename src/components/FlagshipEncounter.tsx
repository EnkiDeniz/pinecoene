"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Label,
  Switch,
  TextArea,
  TextField,
} from "react-aria-components";
import {
  ArrowRight,
  Check,
  Eye,
  Info,
  LockSimple,
  SpeakerSimpleHigh,
} from "@phosphor-icons/react";
import { LocketStage } from "@/components/locket/LocketStage";
import type { PinecoenePartDetail } from "@/components/locket/pinecoene-locket";
import { SiteHeader } from "@/components/SiteHeader";
import { getFlagshipOffering } from "@/lib/fixture";
import type { OfferingPackageV0_1 } from "@/lib/protocol";
import { saveLocalReturn } from "@/lib/custody";
import { playOpeningTone } from "@/lib/audio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type EncounterState = "arrival" | "opening" | "opened" | "waiting" | "declined";

const ANATOMY = [
  {
    partId: "part-2",
    title: "The first admission",
    description:
      "One thought was admitted plainly. It becomes a load-bearing plane rather than decorative copy.",
  },
  {
    partId: "part-5",
    title: "The return",
    description:
      "A recurring thought changes the form. The mineral-blue trace marks recurrence without pretending it is the source.",
  },
  {
    partId: "part-7",
    title: "The kept gap",
    description:
      "What was not finished is kept as a gap. Nothing has been painted over for the sake of symmetry.",
  },
  {
    partId: "part-9",
    title: "The unresolved seam",
    description:
      "The record continues beyond what was admitted. The object refuses to counterfeit an ending.",
  },
];

export function FlagshipEncounter() {
  const [offering, setOffering] = useState<OfferingPackageV0_1>();
  const [state, setState] = useState<EncounterState>("arrival");
  const [captionIndex, setCaptionIndex] = useState(0);
  const [selectedPart, setSelectedPart] = useState<PinecoenePartDetail>();
  const [returnText, setReturnText] = useState("");
  const [mayBecomeMuse, setMayBecomeMuse] = useState(false);
  const [withdrawalAllowed, setWithdrawalAllowed] = useState(true);
  const [returnSaved, setReturnSaved] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    void getFlagshipOffering().then(setOffering);
  }, []);

  const captions = useMemo(
    () =>
      offering?.performance.map(({ semanticText }) => semanticText) ?? [
        "The Locket receives your attention.",
      ],
    [offering],
  );

  useEffect(() => {
    if (state !== "opening" || reducedMotion) return;
    const timers = captions.map((_, index) =>
      window.setTimeout(() => setCaptionIndex(index), index * 1250),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [captions, reducedMotion, state]);

  function openOffering() {
    setState(reducedMotion ? "opened" : "opening");
    setCaptionIndex(0);
    if (soundEnabled) playOpeningTone();
  }

  async function saveReturn() {
    if (!offering || !returnText.trim()) return;
    await saveLocalReturn(
      offering.offering.offeringId,
      returnText,
      mayBecomeMuse,
      withdrawalAllowed,
    );
    setReturnSaved(true);
  }

  const open = state === "opening" || state === "opened";

  return (
    <main className={`encounter encounter-${state}`}>
      <SiteHeader quiet />
      <section className="encounterStage" aria-labelledby="offering-title">
        <div className="offeringProvenance">
          <span>An offering from</span>
          <strong>D.</strong>
        </div>

        <LocketStage
          className="flagshipLocket"
          opened={open}
          seed={offering?.projection.topologySeed ?? "pcn-0002"}
          temperament="tender"
          reducedMotion={reducedMotion}
          selectedPart={selectedPart?.partId}
          onOpened={() => setState("opened")}
          onPartSelect={(part) => {
            setSelectedPart(part);
            if (state === "opening") setState("opened");
          }}
        />

        {state === "arrival" ? (
          <div className="overture">
            <p className="eyebrow">PCN-0002 · Locket</p>
            <h1 id="offering-title">“I have been thinking about you.”</h1>
            <p className="overtureCopy">
              Opening lets you witness how it came to be. Nothing is asked of
              you, and nothing about you travels back without your say.
            </p>
            <div className="primaryActions">
              <Button className="primaryButton" onPress={openOffering}>
                Open the Locket <ArrowRight aria-hidden="true" />
              </Button>
              <div className="secondaryActions">
                <Button className="quietButton" onPress={() => setState("waiting")}>
                  Not now
                </Button>
                <Button className="textButton" onPress={() => setState("declined")}>
                  Decline
                </Button>
              </div>
            </div>
            <Switch
              className="soundSwitch"
              isSelected={soundEnabled}
              onChange={setSoundEnabled}
            >
              <span className="switchTrack"><span className="switchThumb" /></span>
              <SpeakerSimpleHigh aria-hidden="true" /> Sound when opened
            </Switch>
          </div>
        ) : null}

        {state === "opening" ? (
          <div className="openingCopy" aria-live="polite">
            <p>{captions[Math.min(captionIndex, captions.length - 1)]}</p>
            <Button className="textButton" onPress={() => setState("opened")}>
              Skip to the settled form
            </Button>
          </div>
        ) : null}

        {state === "waiting" || state === "declined" ? (
          <div className="decisionState" aria-live="polite">
            <LockSimple aria-hidden="true" weight="light" />
            <h1>{state === "waiting" ? "The Locket stays closed." : "The offering remains unopened."}</h1>
            <p>
              {state === "waiting"
                ? "It will wait here. No response has been recorded."
                : "This demonstration records no external decline or delivery state."}
            </p>
            <Button className="quietButton" onPress={() => setState("arrival")}>
              Return to the offering
            </Button>
          </div>
        ) : null}
      </section>

      {state === "opened" ? (
        <section className="settledExperience" aria-labelledby="settled-title">
          <header className="settledHeader">
            <p className="eyebrow">The form has settled</p>
            <h2 id="settled-title">One seam stays open.</h2>
            <p>
              Touch the form or move through its anatomy. Every visible part
              answers to something admitted; the gap answers to what was not.
            </p>
          </header>

          <div className="anatomyGrid">
            <div className="anatomyList" aria-label="Semantic anatomy">
              {ANATOMY.map((part, index) => (
                <Button
                  key={part.partId}
                  className="anatomyButton"
                  data-selected={selectedPart?.partId === part.partId}
                  onPress={() => setSelectedPart(part)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{part.title}</strong>
                  <Eye aria-hidden="true" weight="light" />
                </Button>
              ))}
            </div>
            <aside className="anatomyDetail" aria-live="polite">
              <p className="eyebrow">Inspectable causality</p>
              <h3>{selectedPart?.title ?? "Choose a part of the form"}</h3>
              <p>
                {selectedPart?.description ??
                  "The object can be explored spatially or through this synchronized semantic list."}
              </p>
            </aside>
          </div>

          <div className="returnTable">
            <div className="returnIntroduction">
              <p className="eyebrow">A Return</p>
              <h2>What came back to you?</h2>
              <p>
                A Return is yours. In this showcase it stays only in this
                browser and is not delivered to a sender.
              </p>
            </div>
            {returnSaved ? (
              <div className="returnConfirmation" aria-live="polite">
                <Check aria-hidden="true" weight="light" />
                <h3>Your Return rests folded on this device.</h3>
                <p>
                  It was not sent. Muse reuse is {mayBecomeMuse ? "permitted" : "not permitted"}; withdrawal is {withdrawalAllowed ? "allowed" : "not offered"} in this local demonstration.
                </p>
              </div>
            ) : (
              <div className="returnForm">
                <TextField
                  className="field"
                  value={returnText}
                  onChange={setReturnText}
                  isRequired
                >
                  <Label>Your exact words</Label>
                  <TextArea rows={5} placeholder="Write only what you want to keep here…" />
                </TextField>
                <Switch
                  className="permissionSwitch"
                  isSelected={mayBecomeMuse}
                  onChange={setMayBecomeMuse}
                >
                  <span className="switchTrack"><span className="switchThumb" /></span>
                  <span><strong>May become Muse material</strong><small>Off by default. This does not admit it into another Pinecœne.</small></span>
                </Switch>
                <Switch
                  className="permissionSwitch"
                  isSelected={withdrawalAllowed}
                  onChange={setWithdrawalAllowed}
                >
                  <span className="switchTrack"><span className="switchThumb" /></span>
                  <span><strong>May be withdrawn</strong><small>On by default in this local demonstration.</small></span>
                </Switch>
                <Button
                  className="primaryButton"
                  isDisabled={!returnText.trim()}
                  onPress={() => void saveReturn()}
                >
                  Fold this Return locally <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            )}
          </div>
        </section>
      ) : null}

      <details className="truthLedger">
        <summary><Info aria-hidden="true" /> What is real in this specimen?</summary>
        <p>{offering?.disclosure ?? "Loading fixture disclosure…"}</p>
        <dl>
          <div><dt>Standing</dt><dd>Curated fixture</dd></div>
          <div><dt>Delivery</dt><dd>Not claimed</dd></div>
          <div><dt>Return</dt><dd>Browser-local only</dd></div>
          <div><dt>Package</dt><dd>{offering ? offering.packageHash.slice(0, 16) : "Preparing…"}</dd></div>
        </dl>
      </details>
    </main>
  );
}
