import type { InstrumentScene } from "../lib/types";
import styles from "../demo-instrument.module.css";

type Check = Readonly<{
  id: string;
  label: string;
  value: string;
  passed: boolean;
}>;

function conformanceChecks(scene: InstrumentScene): readonly Check[] {
  const pointIds = new Set(scene.points.map((point) => point.id));
  const featureIds = [
    ...scene.points.map((point) => point.id),
    ...scene.edges.map((edge) => edge.id),
    ...scene.faces.map((face) => face.id),
  ];
  const finite = scene.points.every((point) => point.position.length === 3 && point.position.every(Number.isFinite));
  const edgesResolve = scene.edges.every(
    (edge) => pointIds.has(edge.fromPointId) && pointIds.has(edge.toPointId) && edge.fromPointId !== edge.toPointId,
  );
  const facesResolve = scene.faces.every(
    (face) => face.pointIds.length >= 3 && new Set(face.pointIds).size >= 3 && face.pointIds.every((id) => pointIds.has(id)),
  );
  const referencesPresent = [...scene.points, ...scene.edges, ...scene.faces].every(
    (feature) => feature.semanticRefs.length > 0 && Boolean(feature.inspection.trim()),
  );

  return [
    { id: "unique-features", label: "Feature IDs", value: `${new Set(featureIds).size}/${featureIds.length}`, passed: new Set(featureIds).size === featureIds.length },
    { id: "finite-points", label: "Finite 3D points", value: `${scene.points.length}`, passed: finite },
    { id: "edge-references", label: "Edge references", value: `${scene.edges.length}`, passed: edgesResolve },
    { id: "face-references", label: "Face boundaries", value: `${scene.faces.length}`, passed: facesResolve },
    { id: "semantic-bindings", label: "Semantic bindings", value: `${featureIds.length}`, passed: referencesPresent },
    { id: "scene-hash", label: "Scene identity", value: scene.sceneHash ? "present" : "missing", passed: Boolean(scene.sceneHash) },
  ];
}

export function InstrumentConformance({ scene }: Readonly<{ scene: InstrumentScene }>) {
  const checks = conformanceChecks(scene);
  const passed = checks.filter((check) => check.passed).length;
  return (
    <section aria-label="Renderer conformance and limitations" className={styles.conformance}>
      <div className={styles.conformanceHeading}>
        <p className={styles.kicker}>RENDERER CONFORMANCE</p>
        <strong data-status={passed === checks.length ? "pass" : "fail"}>{passed}/{checks.length}</strong>
      </div>
      <div className={styles.conformanceRows}>
        {checks.map((check) => (
          <div data-status={check.passed ? "pass" : "fail"} key={check.id}>
            <span>{check.label}</span>
            <code>{check.value}</code>
            <strong>{check.passed ? "PASS" : "FAIL"}</strong>
          </div>
        ))}
      </div>
      <p className={styles.conformanceBoundary}>Render-contract checks only. They do not establish source validity, Admission, or Seal.</p>
      <div className={styles.limitations}>
        <h4>Declared limitations</h4>
        {scene.limitations.length ? (
          <ul>{scene.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
        ) : <p>No scene-specific limitations supplied.</p>}
      </div>
    </section>
  );
}
