import { GatewayExperience } from "@/components/studio/GatewayExperience";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";

export default async function HomePage() {
  const manifest = await getFixtureManifest("pcn-0002");
  const artifact = await compileStudioArtifact(manifest);
  return <GatewayExperience artifact={artifact} />;
}
