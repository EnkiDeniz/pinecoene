"use client";

import {
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent,
} from "react";

import type {
  InstrumentEdge,
  InstrumentFace,
  InstrumentPoint,
  InstrumentScene,
} from "../lib/types";
import styles from "../demo-instrument.module.css";
import { InstrumentConformance } from "./InstrumentConformance";
import { InstrumentInspector, type InstrumentSelection } from "./InstrumentInspector";

const VIEWBOX = Object.freeze({ width: 1000, height: 700, centerX: 500, centerY: 350 });
const DEFAULT_CAMERA: Camera = Object.freeze({ rotationX: -18, rotationY: -24, zoom: 1 });

type Camera = Readonly<{
  rotationX: number;
  rotationY: number;
  zoom: number;
}>;

type ProjectedPoint = Readonly<{
  x: number;
  y: number;
  depth: number;
}>;

type DragState = Readonly<{
  pointerId: number;
  x: number;
  y: number;
}> | null;

export type StructurePlayerProps = Readonly<{
  scene: InstrumentScene;
  expressionVariant?: "neutral" | "art";
  selected?: InstrumentSelection;
  onSelect?: (selection: InstrumentSelection) => void;
  showInspector?: boolean;
  className?: string;
}>;

type StandingKind = "candidate" | "open" | "withheld" | "evidence" | "committed" | "neutral";

const radians = (degrees: number) => (degrees * Math.PI) / 180;
const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

function classifyStanding(standing: string, open = false): StandingKind {
  const value = standing.toLowerCase();
  if (value.includes("withheld") || value.includes("private") || value.includes("closed")) return "withheld";
  if (open || value.includes("open") || value.includes("unresolved") || value.includes("gap")) return "open";
  if (value.includes("candidate") || value.includes("proposed") || value.includes("ghost")) return "candidate";
  if (value.includes("evidence") || value.includes("return") || value.includes("trace")) return "evidence";
  if (value.includes("admitted") || value.includes("fixture") || value.includes("solid") || value.includes("committed")) {
    return "committed";
  }
  return "neutral";
}

function rotatePoint(
  position: InstrumentPoint["position"],
  centroid: readonly [number, number, number],
  camera: Camera,
  scale: number,
): ProjectedPoint {
  const x0 = position[0] - centroid[0];
  const y0 = position[1] - centroid[1];
  const z0 = position[2] - centroid[2];
  const rx = radians(camera.rotationX);
  const ry = radians(camera.rotationY);

  const y1 = y0 * Math.cos(rx) - z0 * Math.sin(rx);
  const z1 = y0 * Math.sin(rx) + z0 * Math.cos(rx);
  const x2 = x0 * Math.cos(ry) + z1 * Math.sin(ry);
  const z2 = -x0 * Math.sin(ry) + z1 * Math.cos(ry);
  const effectiveScale = scale * camera.zoom;

  return {
    x: VIEWBOX.centerX + x2 * effectiveScale,
    y: VIEWBOX.centerY - y1 * effectiveScale,
    depth: z2,
  };
}

function projectScene(scene: InstrumentScene, camera: Camera) {
  const finitePoints = scene.points.filter((point) => point.position.every(Number.isFinite));
  const divisor = Math.max(1, finitePoints.length);
  const centroid = finitePoints.reduce<readonly [number, number, number]>(
    (sum, point) => [sum[0] + point.position[0], sum[1] + point.position[1], sum[2] + point.position[2]],
    [0, 0, 0],
  ).map((value) => value / divisor) as [number, number, number];
  const radius = Math.max(
    0.001,
    ...finitePoints.map((point) =>
      Math.hypot(
        point.position[0] - centroid[0],
        point.position[1] - centroid[1],
        point.position[2] - centroid[2],
      ),
    ),
  );
  const scale = 238 / radius;

  return new Map(
    finitePoints.map((point) => [point.id, rotatePoint(point.position, centroid, camera, scale)]),
  );
}

function edgeSegments(a: ProjectedPoint, b: ProjectedPoint, kind: StandingKind) {
  const interpolate = (from: number, to: number, t: number) => from + (to - from) * t;
  if (kind === "open") {
    return [
      { x1: a.x, y1: a.y, x2: interpolate(a.x, b.x, 0.36), y2: interpolate(a.y, b.y, 0.36) },
      { x1: interpolate(a.x, b.x, 0.64), y1: interpolate(a.y, b.y, 0.64), x2: b.x, y2: b.y },
    ];
  }
  if (kind === "withheld") {
    return [
      { x1: a.x, y1: a.y, x2: interpolate(a.x, b.x, 0.13), y2: interpolate(a.y, b.y, 0.13) },
      { x1: interpolate(a.x, b.x, 0.87), y1: interpolate(a.y, b.y, 0.87), x2: b.x, y2: b.y },
    ];
  }
  return [{ x1: a.x, y1: a.y, x2: b.x, y2: b.y }];
}

function selectionFor(kind: InstrumentSelection["kind"], id: string): InstrumentSelection {
  return { kind, id } as InstrumentSelection;
}

function featureKey(selection: InstrumentSelection) {
  return `${selection.kind}:${selection.id}`;
}

function eventSelectKeys(event: KeyboardEvent<SVGGElement>, select: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    select();
  }
}

function labelPosition(point: ProjectedPoint, index: number) {
  const dx = point.x - VIEWBOX.centerX;
  const dy = point.y - VIEWBOX.centerY;
  const fallbackAngle = (index / 7) * Math.PI * 2 - Math.PI / 2;
  const length = Math.hypot(dx, dy);
  const unitX = length > 30 ? dx / length : Math.cos(fallbackAngle);
  const unitY = length > 30 ? dy / length : Math.sin(fallbackAngle);
  const distance = 48;
  return {
    x: point.x + unitX * distance,
    y: point.y + unitY * distance,
    anchor: unitX < -0.2 ? "end" : unitX > 0.2 ? "start" : "middle",
  } as const;
}

function EdgeGlyph({
  edge,
  a,
  b,
  selected,
  onSelect,
}: Readonly<{
  edge: InstrumentEdge;
  a: ProjectedPoint;
  b: ProjectedPoint;
  selected: boolean;
  onSelect: () => void;
}>) {
  const kind = classifyStanding(edge.standing, edge.open);
  const segments = edgeSegments(a, b, kind);
  return (
    <g
      aria-label={`${edge.inspection}. Standing: ${edge.standing}.`}
      aria-pressed={selected}
      className={styles.featureTarget}
      data-feature-kind="edge"
      data-selected={selected ? "true" : "false"}
      data-standing-kind={kind}
      onClick={onSelect}
      onFocus={onSelect}
      onKeyDown={(event) => eventSelectKeys(event, onSelect)}
      role="button"
      tabIndex={0}
    >
      <line className={styles.edgeHit} x1={a.x} x2={b.x} y1={a.y} y2={b.y} />
      {segments.map((segment, index) => (
        <line className={styles.structureEdge} key={index} {...segment} />
      ))}
      {kind === "open" ? (
        <g className={styles.openMark} aria-hidden="true">
          <circle cx={(a.x + b.x) / 2} cy={(a.y + b.y) / 2} r="9" />
          <path d={`M ${(a.x + b.x) / 2 - 4} ${(a.y + b.y) / 2} h 8`} />
        </g>
      ) : null}
      {kind === "withheld" ? (
        <g className={styles.withheldMark} aria-hidden="true">
          <path d={`M ${(a.x + b.x) / 2 - 5} ${(a.y + b.y) / 2 - 5} l 10 10 M ${(a.x + b.x) / 2 + 5} ${(a.y + b.y) / 2 - 5} l -10 10`} />
        </g>
      ) : null}
    </g>
  );
}

function FaceGlyph({
  face,
  points,
  selected,
  onSelect,
  gradientId,
}: Readonly<{
  face: InstrumentFace;
  points: readonly ProjectedPoint[];
  selected: boolean;
  onSelect: () => void;
  gradientId: string;
}>) {
  const kind = classifyStanding(face.standing, face.open);
  const coordinates = points.map((point) => `${point.x},${point.y}`).join(" ");
  return (
    <g
      aria-label={`${face.inspection}. Standing: ${face.standing}.`}
      aria-pressed={selected}
      className={styles.featureTarget}
      data-feature-kind="face"
      data-selected={selected ? "true" : "false"}
      data-standing-kind={kind}
      onClick={onSelect}
      onFocus={onSelect}
      onKeyDown={(event) => eventSelectKeys(event, onSelect)}
      role="button"
      tabIndex={0}
    >
      <polygon className={styles.faceHit} points={coordinates} />
      <polygon
        className={styles.structureFace}
        points={coordinates}
        style={kind === "committed" ? { fill: `url(#${gradientId})` } : undefined}
      />
    </g>
  );
}

function PointGlyph({
  point,
  projected,
  index,
  selected,
  onSelect,
}: Readonly<{
  point: InstrumentPoint;
  projected: ProjectedPoint;
  index: number;
  selected: boolean;
  onSelect: () => void;
}>) {
  const kind = classifyStanding(point.standing);
  const label = labelPosition(projected, index);
  return (
    <g
      aria-label={`${point.label}. ${point.inspection}. Standing: ${point.standing}.`}
      aria-pressed={selected}
      className={styles.featureTarget}
      data-feature-kind="point"
      data-selected={selected ? "true" : "false"}
      data-standing-kind={kind}
      onClick={onSelect}
      onFocus={onSelect}
      onKeyDown={(event) => eventSelectKeys(event, onSelect)}
      role="button"
      tabIndex={0}
    >
      <circle className={styles.pointHit} cx={projected.x} cy={projected.y} r="62" />
      <circle className={styles.pointHalo} cx={projected.x} cy={projected.y} r="26" />
      <circle className={styles.pointRing} cx={projected.x} cy={projected.y} r="12" />
      <circle className={styles.pointCore} cx={projected.x} cy={projected.y} r="4" />
      <line className={styles.labelLeader} x1={projected.x} y1={projected.y} x2={label.x} y2={label.y} />
      <text className={styles.pointLabel} textAnchor={label.anchor} x={label.x} y={label.y - 3}>
        <tspan className={styles.pointLabelId}>{point.shortLabel}</tspan>
        <tspan className={styles.pointLabelTitle} dy="17" x={label.x}>{point.label}</tspan>
      </text>
    </g>
  );
}

export function StructurePlayer({
  scene,
  expressionVariant = "neutral",
  selected: controlledSelection,
  onSelect,
  showInspector = true,
  className,
}: StructurePlayerProps) {
  const firstSelection: InstrumentSelection = scene.points[0]
    ? { kind: "point", id: scene.points[0].id }
    : { kind: "scene", id: scene.sceneId };
  const [internalSelection, setInternalSelection] = useState<InstrumentSelection>(firstSelection);
  const [camera, setCamera] = useState<Camera>(DEFAULT_CAMERA);
  const dragRef = useRef<DragState>(null);
  const definitionId = useId().replaceAll(":", "");
  const selection = controlledSelection ?? internalSelection;
  const projected = useMemo(() => projectScene(scene, camera), [camera, scene]);

  const projectedFaces = useMemo(
    () =>
      scene.faces
        .map((face) => ({
          face,
          points: face.pointIds.map((id) => projected.get(id)).filter((point): point is ProjectedPoint => Boolean(point)),
        }))
        .filter((entry) => entry.points.length >= 3)
        .sort((a, b) => {
          const depthA = a.points.reduce((sum, point) => sum + point.depth, 0) / a.points.length;
          const depthB = b.points.reduce((sum, point) => sum + point.depth, 0) / b.points.length;
          return depthA - depthB;
        }),
    [projected, scene.faces],
  );

  const expressionDecorations = useMemo(() => {
    if (expressionVariant !== "art") return [];
    const projectedValues = [...projected.values()];
    const crownY = projectedValues.length ? Math.min(...projectedValues.map(({ y }) => y)) - 58 : 168;
    return scene.decorations.map((decoration) => {
      const anchored = decoration.anchorFeatureId ? projected.get(decoration.anchorFeatureId) : undefined;
      return {
        ...decoration,
        projected: anchored ?? (decoration.kind === "star" ? { x: VIEWBOX.centerX, y: crownY, depth: 0 } : undefined),
      };
    });
  }, [expressionVariant, projected, scene.decorations]);

  const choose = (next: InstrumentSelection) => {
    setInternalSelection(next);
    onSelect?.(next);
  };

  const resetCamera = () => setCamera(DEFAULT_CAMERA);
  const zoomBy = (delta: number) => setCamera((current) => ({ ...current, zoom: clamp(current.zoom + delta, 0.72, 1.55) }));

  const beginOrbit = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (event.target !== event.currentTarget) return;
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveOrbit = (event: ReactPointerEvent<SVGSVGElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    dragRef.current = { pointerId: drag.pointerId, x: event.clientX, y: event.clientY };
    setCamera((current) => ({
      ...current,
      rotationX: clamp(current.rotationX - dy * 0.17, -68, 34),
      rotationY: clamp(current.rotationY + dx * 0.17, -72, 72),
    }));
  };

  const finishOrbit = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
  };

  const onWheel = (event: WheelEvent<SVGSVGElement>) => {
    event.preventDefault();
    zoomBy(-event.deltaY * 0.001);
  };

  const onStageKeyDown = (event: KeyboardEvent<SVGSVGElement>) => {
    if (event.key === "0") resetCamera();
    if (event.key === "+" || event.key === "=") zoomBy(0.06);
    if (event.key === "-") zoomBy(-0.06);
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
      const dx = event.key === "ArrowLeft" ? -10 : event.key === "ArrowRight" ? 10 : 0;
      const dy = event.key === "ArrowUp" ? -10 : event.key === "ArrowDown" ? 10 : 0;
      setCamera((current) => ({
        ...current,
        rotationX: clamp(current.rotationX - dy * 0.17, -68, 34),
        rotationY: clamp(current.rotationY + dx * 0.17, -72, 72),
      }));
    }
  };

  const rootClassName = [styles.player, className].filter(Boolean).join(" ");

  return (
    <section
      aria-label={`${scene.title} structure player`}
      className={rootClassName}
      data-expression-variant={expressionVariant}
      data-scene-standing={classifyStanding(scene.standing.lifecycle)}
    >
      <header className={styles.identityBar}>
        <div className={styles.identityCopy}>
          <p className={styles.kicker}>PINECŒNE / STRUCTURE PLAYER</p>
          <h2>{scene.title}</h2>
          <p>{scene.subtitle}</p>
        </div>
        <div className={styles.standingBlock}>
          <span data-standing-kind={classifyStanding(scene.standing.lifecycle)}>{scene.standing.lifecycle.replaceAll("_", " ")}</span>
          <code title={scene.sceneId}>{scene.sceneId}</code>
        </div>
      </header>

      <div className={`${styles.playerGrid}${showInspector ? "" : ` ${styles.stageOnly}`}`}>
        <div className={styles.stageColumn}>
          <div className={styles.stageRegister} aria-hidden="true">
            <span>STRUCTURE / ORTHOGRAPHIC</span>
            <span>RX {camera.rotationX.toFixed(1)}° · RY {camera.rotationY.toFixed(1)}° · Z {camera.zoom.toFixed(2)}</span>
          </div>

          <div className={styles.stageFrame}>
            <svg
              aria-describedby={`${definitionId}-desc`}
              aria-label={`Interactive structure for ${scene.title}`}
              className={styles.stage}
              data-testid="structure-player-stage"
              onDoubleClick={resetCamera}
              onKeyDown={onStageKeyDown}
              onPointerCancel={finishOrbit}
              onPointerDown={beginOrbit}
              onPointerMove={moveOrbit}
              onPointerUp={finishOrbit}
              onWheel={onWheel}
              role="group"
              tabIndex={0}
              viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
            >
              <desc id={`${definitionId}-desc`}>
                Drag the empty stage to orbit. Scroll or use the zoom controls to near. Use the arrow keys to orbit, plus and minus to zoom, and zero to reset. Focus or activate a feature to inspect its standing and semantic references.
              </desc>
              <defs>
                <linearGradient id={`${definitionId}-neutral-face`} x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="rgba(189, 141, 76, 0.03)" />
                  <stop offset="1" stopColor="rgba(189, 141, 76, 0.14)" />
                </linearGradient>
                <radialGradient id={`${definitionId}-art-face`} cx="50%" cy="44%" r="70%">
                  <stop offset="0" stopColor="rgba(235, 203, 142, 0.36)" />
                  <stop offset="0.48" stopColor="rgba(162, 94, 53, 0.2)" />
                  <stop offset="1" stopColor="rgba(75, 126, 105, 0.08)" />
                </radialGradient>
                <radialGradient id={`${definitionId}-stage-glow`} cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="rgba(222, 185, 119, 0.14)" />
                  <stop offset="1" stopColor="rgba(7, 8, 9, 0)" />
                </radialGradient>
              </defs>

              <g className={styles.registration} aria-hidden="true">
                <line x1="82" x2="918" y1="350" y2="350" />
                <line x1="500" x2="500" y1="64" y2="636" />
                <circle cx="500" cy="350" r="238" />
              </g>

              {expressionVariant === "art" ? (
                <g className={styles.expressionField} aria-hidden="true">
                  <ellipse cx="500" cy="350" fill={`url(#${definitionId}-stage-glow)`} rx="330" ry="270" />
                  <path d="M 210 455 C 305 570 695 570 790 455" />
                  <path d="M 258 507 C 350 618 650 618 742 507" />
                </g>
              ) : null}

              <g className={styles.faces} data-testid="instrument-faces">
                {projectedFaces.map(({ face, points }) => {
                  const next = selectionFor("face", face.id);
                  return (
                    <FaceGlyph
                      face={face}
                      gradientId={expressionVariant === "art" ? `${definitionId}-art-face` : `${definitionId}-neutral-face`}
                      key={face.id}
                      onSelect={() => choose(next)}
                      points={points}
                      selected={featureKey(selection) === featureKey(next)}
                    />
                  );
                })}
              </g>

              <g className={styles.edges} data-testid="instrument-edges">
                {scene.edges.map((edge) => {
                  const a = projected.get(edge.fromPointId);
                  const b = projected.get(edge.toPointId);
                  if (!a || !b) return null;
                  const next = selectionFor("edge", edge.id);
                  return (
                    <EdgeGlyph
                      a={a}
                      b={b}
                      edge={edge}
                      key={edge.id}
                      onSelect={() => choose(next)}
                      selected={featureKey(selection) === featureKey(next)}
                    />
                  );
                })}
              </g>

              <g className={styles.points} data-testid="instrument-points">
                {scene.points.map((point, index) => {
                  const projectedPoint = projected.get(point.id);
                  if (!projectedPoint) return null;
                  const next = selectionFor("point", point.id);
                  return (
                    <PointGlyph
                      index={index}
                      key={point.id}
                      onSelect={() => choose(next)}
                      point={point}
                      projected={projectedPoint}
                      selected={featureKey(selection) === featureKey(next)}
                    />
                  );
                })}
              </g>

              {expressionVariant === "art" ? (
                <g className={styles.decorations} data-testid="instrument-decorations" aria-hidden="true">
                  {expressionDecorations.map((decoration) => {
                    if (decoration.kind === "garland") {
                      return (
                        <g className={styles.garland} key={decoration.decorationId}>
                          <path d="M 290 470 C 390 530 610 530 710 470" />
                          <path d="M 345 380 C 420 424 580 424 655 380" />
                        </g>
                      );
                    }
                    if (!decoration.projected) return null;
                    if (decoration.kind === "star") {
                      const { x, y } = decoration.projected;
                      const points = Array.from({ length: 10 }, (_, index) => {
                        const radius = index % 2 === 0 ? 23 : 9;
                        const angle = -Math.PI / 2 + (index * Math.PI) / 5;
                        return `${x + Math.cos(angle) * radius},${y + Math.sin(angle) * radius}`;
                      }).join(" ");
                      return <polygon className={styles.expressionStar} key={decoration.decorationId} points={points} style={{ color: decoration.color }} />;
                    }
                    const { x, y } = decoration.projected;
                    return (
                      <g className={styles.expressionLight} key={decoration.decorationId} style={{ color: decoration.color }}>
                        <circle cx={x} cy={y} r="21" />
                        <circle cx={x} cy={y} r="5" />
                      </g>
                    );
                  })}
                </g>
              ) : null}
            </svg>

            <div className={styles.orientationMark} aria-hidden="true">
              <span>Y</span><i />
              <span>X</span><i />
            </div>
          </div>

          <div className={styles.controlDeck} aria-label="Structure view controls">
            <button aria-label="Zoom in" onClick={() => zoomBy(0.08)} type="button">+
              <span>Near</span>
            </button>
            <button aria-label="Zoom out" onClick={() => zoomBy(-0.08)} type="button">−
              <span>Far</span>
            </button>
            <button onClick={resetCamera} type="button">Reset <kbd>0</kbd></button>
            <p>Drag to turn · focus a feature to inspect</p>
          </div>
        </div>

        {showInspector ? (
          <aside className={styles.sidebar} aria-label="Structure inspection and conformance">
            <InstrumentInspector scene={scene} selection={selection} />
            <InstrumentConformance scene={scene} />
          </aside>
        ) : null}
      </div>

      <footer className={styles.passport}>
        <div>
          <p className={styles.kicker}>PLAYER PASSPORT</p>
          <strong>{scene.title}</strong>
          <span>{expressionVariant === "art" ? "Authored Expression over invariant Structure" : "Neutral Structure projection"}</span>
        </div>
        <dl>
          <div><dt>scene</dt><dd><code title={scene.sceneHash}>{scene.sceneHash}</code></dd></div>
          {scene.normalFormHash ? <div><dt>normal form</dt><dd><code title={scene.normalFormHash}>{scene.normalFormHash}</code></dd></div> : null}
          {scene.expressionHash ? <div><dt>expression</dt><dd><code title={scene.expressionHash}>{scene.expressionHash}</code></dd></div> : null}
        </dl>
        <p className={styles.passportNote}>Rendered form is not evidence of admission, delivery, acceptance, or Seal.</p>
      </footer>
    </section>
  );
}
