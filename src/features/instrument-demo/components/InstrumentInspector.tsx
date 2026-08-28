import type { InstrumentEdge, InstrumentFace, InstrumentPoint, InstrumentScene } from "../lib/types";
import styles from "../demo-instrument.module.css";

export type InstrumentSelection =
  | Readonly<{ kind: "scene"; id: string }>
  | Readonly<{ kind: "point"; id: string }>
  | Readonly<{ kind: "edge"; id: string }>
  | Readonly<{ kind: "face"; id: string }>;

type SelectedFeature = InstrumentPoint | InstrumentEdge | InstrumentFace;

function featureFor(scene: InstrumentScene, selection: InstrumentSelection): SelectedFeature | null {
  if (selection.kind === "point") return scene.points.find((point) => point.id === selection.id) ?? null;
  if (selection.kind === "edge") return scene.edges.find((edge) => edge.id === selection.id) ?? null;
  if (selection.kind === "face") return scene.faces.find((face) => face.id === selection.id) ?? null;
  return null;
}

function kindLabel(feature: SelectedFeature) {
  if ("position" in feature) return "Point";
  if ("fromPointId" in feature) return "Edge";
  return "Face";
}

function featureLabel(feature: SelectedFeature) {
  return feature.label;
}

export function InstrumentInspector({
  scene,
  selection,
}: Readonly<{
  scene: InstrumentScene;
  selection: InstrumentSelection;
}>) {
  const feature = featureFor(scene, selection);

  if (!feature) {
    return (
      <section aria-live="polite" className={styles.inspector}>
        <p className={styles.kicker}>ANATOMY / SCENE</p>
        <h3>{scene.title}</h3>
        <p className={styles.inspection}>{scene.subtitle}</p>
        <dl className={styles.inspectorRows}>
          <div><dt>standing</dt><dd>{scene.standing.lifecycle.replaceAll("_", " ")}</dd></div>
          <div><dt>points</dt><dd>{scene.points.length}</dd></div>
          <div><dt>edges</dt><dd>{scene.edges.length}</dd></div>
          <div><dt>faces</dt><dd>{scene.faces.length}</dd></div>
        </dl>
      </section>
    );
  }

  return (
    <section aria-live="polite" className={styles.inspector}>
      <p className={styles.kicker}>ANATOMY / {kindLabel(feature).toUpperCase()}</p>
      <h3>{featureLabel(feature)}</h3>
      <p className={styles.inspection}>{feature.inspection}</p>
      <dl className={styles.inspectorRows}>
        <div><dt>id</dt><dd><code>{feature.id}</code></dd></div>
        <div><dt>standing</dt><dd>{feature.standing}</dd></div>
        {"position" in feature ? <div><dt>position</dt><dd><code>[{feature.position.join(", ")}]</code></dd></div> : null}
        {"fromPointId" in feature ? <div><dt>endpoints</dt><dd><code>{feature.fromPointId} → {feature.toPointId}</code></dd></div> : null}
        {"pointIds" in feature ? <div><dt>boundary</dt><dd><code>{feature.pointIds.join(" · ")}</code></dd></div> : null}
        {"open" in feature ? <div><dt>open</dt><dd>{feature.open ? "yes — gap preserved" : "no"}</dd></div> : null}
        <div><dt>material</dt><dd>{feature.materialRole.replaceAll("_", " ")}</dd></div>
        <div><dt>disclosure</dt><dd>{feature.disclosure.replaceAll("_", " ")}</dd></div>
      </dl>
      <div className={styles.semanticRefs}>
        <h4>Semantic references</h4>
        {feature.semanticRefs.length ? (
          <ul>
            {feature.semanticRefs.map((reference) => <li key={reference}><code>{reference}</code></li>)}
          </ul>
        ) : <p>None supplied. Renderer conformance will fail.</p>}
      </div>
    </section>
  );
}
