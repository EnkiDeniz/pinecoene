"use client";

import { useEffect, useRef, useState } from "react";
import { FormStage } from "@/components/form/FormStage";
import type { RendererNeutralSceneV0_1 } from "@/lib/studio-contracts";

export function LazyPublicForm({ scene }: { scene:RendererNeutralSceneV0_1 }) {
  const container = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { rootMargin:"320px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={container} className="lazyPublicForm">{visible ? <FormStage scene={scene} reducedMotion /> : <div className="publicFormPoster" role="img" aria-label={`${scene.fixtureId} semantic form poster`}><span>{scene.fixtureId}</span><strong>A deterministic sketch waits below the thesis.</strong><small>3D loads only when this study nears the viewport.</small></div>}</div>;
}
