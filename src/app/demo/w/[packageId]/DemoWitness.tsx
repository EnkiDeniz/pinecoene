"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { StructurePlayer } from "@/features/instrument-demo/components/StructurePlayer";
import { createSyntheticReturn } from "@/features/instrument-demo/lib/recipient-return";
import type {
  EncounterPackageV0_1,
  InstrumentScene,
  ReturnProjectionV0_1,
} from "@/features/instrument-demo/lib/types";

import styles from "./witness.module.css";

function shortHash(value: string) {
  const plain = value.replace(/^sha256:/, "");
  return `${plain.slice(0, 12)}…${plain.slice(-10)}`;
}

export function DemoWitness({
  packageId,
}: Readonly<{ packageId: string }>) {
  const [encounter, setEncounter] = useState<EncounterPackageV0_1 | null>(null);
  const [scene, setScene] = useState<InstrumentScene | null>(null);
  const [opening, setOpening] = useState(false);
  const [text, setText] = useState("");
  const [returned, setReturned] = useState<ReturnProjectionV0_1 | null>(null);
  const [storageState, setStorageState] = useState<"unsaved" | "saved" | "denied">("unsaved");
  const [error, setError] = useState<string | null>(null);
  const [working, setWorking] = useState(false);
  const canReturn = Boolean(encounter?.controls.createReturn && encounter.projection.capabilities.includes("return"));

  const openLocket = async () => {
    setError(null);
    setOpening(true);
    try {
      const response = await fetch(`/api/demo/offerings/${encodeURIComponent(packageId)}`, {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("This exact local package is unavailable.");
      const payload = await response.json() as {
        encounter?: EncounterPackageV0_1;
        scene?: InstrumentScene;
      };
      if (payload.encounter?.packageId !== packageId || !payload.scene) {
        throw new Error("The acquired package did not match this Locket.");
      }
      setEncounter(payload.encounter);
      setScene(payload.scene);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "This local Locket could not be opened.");
    } finally {
      setOpening(false);
    }
  };

  const makeReturn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    if (!text.trim()) {
      setError("Write the exact unfinished sentence you want this local Return to hold.");
      return;
    }
    setWorking(true);
    try {
      if (!encounter) throw new Error("The exact Encounter package is not open.");
      const next = await createSyntheticReturn(encounter, text.trim());
      setReturned(next);
      try {
        window.localStorage.setItem(`pinecoene-demo-return:${next.returnId}`, JSON.stringify(next));
        setStorageState("saved");
      } catch {
        setStorageState("denied");
      }
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The local Return could not be compiled.");
    } finally {
      setWorking(false);
    }
  };

  if (!encounter || !scene) {
    return (
      <main className={styles.closedRoom}>
        <header className={styles.topbar}>
          <Link href="/demo" prefetch={false}>Pinecœne</Link>
          <span>LOCAL WITNESS · NOT DELIVERED</span>
        </header>
        <section className={styles.overture} aria-labelledby="offering-title">
          <p>LOCAL OFFERING DEMONSTRATION</p>
          <div className={styles.locket} aria-hidden="true">
            <i /><i /><i />
            <span>œ</span>
          </div>
          <h1 id="offering-title">A Pinecœne rests here.</h1>
          <p className={styles.intro}>Opening reveals only the projection compiled into this exact package. It does not grant the private normal form or claim delivery, receipt, or acceptance.</p>
          <button disabled={opening} onClick={openLocket} type="button">
            {opening ? "Acquiring exact package…" : "Open this local Locket"}
          </button>
          {error ? <p role="alert">{error}</p> : null}
          <code>EXACT PACKAGE HELD UNTIL OPENING</code>
        </section>
        <footer className={styles.closedBoundary}>
          <span>SYNTHETIC FIXTURE</span><span>NO REMOTE DELIVERY</span><span>NO LIVE ŒDIT CONNECTION</span>
        </footer>
      </main>
    );
  }

  return (
    <main className={styles.witnessRoom}>
      <header className={styles.topbar}>
        <Link href="/demo" prefetch={false}>← Return to demonstrator</Link>
        <span>OPENED LOCALLY · NO ACCEPTANCE CLAIM</span>
      </header>

      <section className={styles.packageIdentity}>
        <div>
          <p>ENCOUNTER PACKAGE / {encounter.apertureProfile.replaceAll("_", " ")}</p>
          <h1>Exact Witness</h1>
        </div>
        <dl>
          <div><dt>package</dt><dd><code title={encounter.packageHash}>{shortHash(encounter.packageHash)}</code></dd></div>
          <div><dt>capabilities</dt><dd>{encounter.projection.capabilities.join(" · ")}</dd></div>
          <div><dt>custody</dt><dd>local internal</dd></div>
        </dl>
      </section>

      <div className={styles.playerArea}>
        <StructurePlayer expressionVariant={scene.expressionHash ? "art" : "neutral"} scene={scene} />
      </div>

      <section className={styles.returnArea} aria-labelledby="return-heading">
        <div>
          <p>RETURN / RECIPIENT-SIDE PROJECTION</p>
          <h2 id="return-heading">The predecessor stays still.</h2>
          <span>A Return is a new immutable object bound to this package hash. It does not edit the Pinecœne you encountered.</span>
        </div>
        {canReturn ? (
          <form onSubmit={makeReturn}>
            <label htmlFor="witness-return">Your exact unfinished sentence</label>
            <textarea id="witness-return" onChange={(event) => { setText(event.target.value); setReturned(null); }} rows={4} value={text} />
            <button disabled={working} type="submit">{working ? "Compiling…" : "Fold this Return locally"}</button>
            {error ? <p role="alert">{error}</p> : null}
          </form>
        ) : (
          <div className={styles.returnClosed}>
            <strong>RETURN NOT GRANTED</strong>
            <p>This narrow package grants view only. Opening the Locket did not widen it.</p>
          </div>
        )}
        {returned ? (
          <article className={styles.returnReceipt} aria-live="polite">
            <p>LOCAL SYNTHETIC RETURN CREATED</p>
            <blockquote>{returned.content.exactText}</blockquote>
            <dl>
              <div><dt>Return</dt><dd><code>{shortHash(returned.returnHash)}</code></dd></div>
              <div><dt>package</dt><dd><code>{shortHash(returned.packageRef.packageHash)}</code></dd></div>
              <div><dt>storage</dt><dd>{storageState === "saved" ? "saved in this browser" : storageState === "denied" ? "not saved · browser denied storage" : "not saved"}</dd></div>
            </dl>
            <Link href="/demo" prefetch={false}>Review the Successor law in the demonstrator →</Link>
          </article>
        ) : null}
      </section>
    </main>
  );
}
