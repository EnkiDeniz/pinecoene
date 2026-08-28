import { DemoExperience } from "./DemoExperience";
import {
  compileCandidateScene,
  createInstrumentDemoState,
  createPapilloenCalibrationDemo,
} from "@/features/instrument-demo/lib";

export default async function InstrumentDemoPage() {
  const demo = await createInstrumentDemoState();
  const [candidateRejected, candidateMoved, calibration] = await Promise.all([
    compileCandidateScene(demo.candidate, { rejectedPointIds: ["Q1"] }),
    compileCandidateScene(demo.candidate, {
      positionOverrides: { Q2: [0.56, 0.72, -0.34] },
    }),
    createPapilloenCalibrationDemo(),
  ]);

  return (
    <DemoExperience
      calibrationScene={calibration.foldScene}
      candidateScenes={{
        proposed: demo.scenes.candidate,
        q1Rejected: candidateRejected,
        q2Moved: candidateMoved,
      }}
      demo={demo}
    />
  );
}
