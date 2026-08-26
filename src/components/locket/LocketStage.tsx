"use client";

import { useEffect, useRef, useState } from "react";
import type { MotionTemperament } from "@/lib/protocol";
import type { PinecoenePartDetail } from "@/components/locket/pinecoene-locket";

type LocketElement = HTMLElement & {
  opened: boolean;
  seed: string;
  temperament: MotionTemperament;
  reducedMotion: boolean;
  selectedPart: string;
};

interface LocketStageProps {
  opened: boolean;
  seed: string;
  temperament?: MotionTemperament;
  reducedMotion?: boolean;
  selectedPart?: string;
  onOpened?: () => void;
  onPartSelect?: (detail: PinecoenePartDetail) => void;
  className?: string;
}

export function LocketStage({
  opened,
  seed,
  temperament = "tender",
  reducedMotion = false,
  selectedPart = "",
  onOpened,
  onPartSelect,
  className,
}: LocketStageProps) {
  const elementRef = useRef<LocketElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let current: LocketElement | null = null;
    void import("@/components/locket/pinecoene-locket").then(() => {
      current = elementRef.current;
      if (!current) return;
      current.opened = opened;
      current.seed = seed;
      current.temperament = temperament;
      current.reducedMotion = reducedMotion;
      current.selectedPart = selectedPart;
      setReady(true);
    });
    return () => {
      current = null;
    };
  }, [opened, reducedMotion, seed, selectedPart, temperament]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const handleOpened = () => onOpened?.();
    const handlePart = (event: Event) =>
      onPartSelect?.((event as CustomEvent<PinecoenePartDetail>).detail);
    element.addEventListener("pinecoene-opened", handleOpened);
    element.addEventListener("pinecoene-part-select", handlePart);
    return () => {
      element.removeEventListener("pinecoene-opened", handleOpened);
      element.removeEventListener("pinecoene-part-select", handlePart);
    };
  }, [onOpened, onPartSelect, ready]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !ready) return;
    element.opened = opened;
    element.seed = seed;
    element.temperament = temperament;
    element.reducedMotion = reducedMotion;
    element.selectedPart = selectedPart;
  }, [opened, ready, reducedMotion, seed, selectedPart, temperament]);

  return (
    <div className={className} data-locket-ready={ready ? "true" : "false"}>
      <pinecoene-locket ref={elementRef} seed={seed} />
    </div>
  );
}
