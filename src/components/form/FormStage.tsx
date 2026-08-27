"use client";

import { useEffect, useRef, useState } from "react";
import type { RendererNeutralSceneV0_1 } from "@/lib/studio-contracts";
import type { PinecoeneFeatureDetail } from "@/components/form/pinecoene-form";

type FormElement = HTMLElement & {
  sceneDescription?: RendererNeutralSceneV0_1;
  progress: number;
  selectedFeature: string;
  reducedMotion: boolean;
  autoRotate: boolean;
};

export function FormStage({
  scene,
  progress = 1,
  selectedFeature = "",
  reducedMotion = false,
  autoRotate = false,
  className,
  onFeatureSelect,
}: {
  scene: RendererNeutralSceneV0_1;
  progress?: number;
  selectedFeature?: string;
  reducedMotion?: boolean;
  autoRotate?: boolean;
  className?: string;
  onFeatureSelect?: (detail: PinecoeneFeatureDetail) => void;
}) {
  const ref = useRef<FormElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    void import("@/components/form/pinecoene-form").then(() => {
      if (!alive || !ref.current) return;
      setReady(true);
    });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !ready) return;
    element.sceneDescription = scene;
    element.progress = progress;
    element.selectedFeature = selectedFeature;
    element.reducedMotion = reducedMotion;
    element.autoRotate = autoRotate;
  }, [autoRotate, progress, ready, reducedMotion, scene, selectedFeature]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const handle = (event: Event) => onFeatureSelect?.((event as CustomEvent<PinecoeneFeatureDetail>).detail);
    element.addEventListener("pinecoene-feature-select", handle);
    return () => element.removeEventListener("pinecoene-feature-select", handle);
  }, [onFeatureSelect, ready]);

  return <div className={className} data-form-ready={ready ? "true" : "false"}><pinecoene-form ref={ref} /></div>;
}
