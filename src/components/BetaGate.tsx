"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export function BetaGate() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [opened, setOpened] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function openForm() {
    setOpened(true);
    window.setTimeout(() => {
      if (window.matchMedia("(min-width: 721px) and (pointer: fine)").matches) {
        inputRef.current?.focus();
      }
    }, 80);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    inputRef.current?.blur();

    try {
      const response = await fetch("/api/beta/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || "The instrument stayed closed.");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      router.replace("/");
      router.refresh();
    } catch (thrownError) {
      setError(thrownError instanceof Error ? thrownError.message : "The instrument stayed closed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="beta-gate" aria-labelledby="beta-gate-title">
      <div className="beta-gate__vignette" aria-hidden="true" />
      <div className="beta-gate__noise" aria-hidden="true" />

      <section className="beta-gate__inner">
        <div className="beta-gate__header">
          <p className="beta-gate__eyebrow">Private beta</p>
          <h1 id="beta-gate-title" className="beta-gate__title">
            <strong>Pinecœne:</strong>
            <br />
            the structure
            <br />
            behind the shadow.
          </h1>
        </div>

        <div className="beta-gate__glyphs" aria-label="Pinecœne instrument facts">
          <p>
            <span>01</span> record.
          </p>
          <p>
            <span>01</span> structure.
          </p>
          <p>
            <span>∞</span> expressions.
          </p>
          <p>
            <span>Œ</span> <strong>binds.</strong>
          </p>
        </div>

        <p className="beta-gate__copy">
          One record. One structure.
          <br />
          Many lawful expressions.
          <br />
          Every visible feature points back.
        </p>

        <p className="beta-gate__copy beta-gate__copy--tight">
          Not an illustration.
          <br />
          A candidate instrument opened
          <br />
          only enough to examine.
        </p>

        {!opened ? (
          <button type="button" className="beta-gate__open" onClick={openForm}>
            [Open private beta]
          </button>
        ) : (
          <form className="beta-gate__form" onSubmit={submit}>
            <label className="beta-gate__label" htmlFor="beta-gate-code">
              beta key
            </label>
            <input
              ref={inputRef}
              id="beta-gate-code"
              className="beta-gate__input"
              type="text"
              value={code}
              onChange={(event) => {
                setCode(event.target.value);
                setError("");
              }}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              disabled={submitting}
            />
            <button
              type="submit"
              className="beta-gate__submit"
              disabled={!code.trim() || submitting}
            >
              {submitting ? "opening" : "enter"}
            </button>
            <p className="beta-gate__state">P R I V A T E&nbsp;&nbsp;B E T A</p>
            {error ? (
              <p className="beta-gate__error" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        )}
      </section>
    </main>
  );
}
