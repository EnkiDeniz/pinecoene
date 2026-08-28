import { describe,expect,it } from "vitest";
import { buildGoverningOfferingPackage,getHostedGenesisOffering,verifyGoverningOfferingPackage } from "@/lib/offering-v01";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { getFixtureManifest } from "@/lib/studio-fixtures";

describe("governing recipient Offering",()=>{
  it("builds one stable hosted Genesis package without sound, telemetry, or expiry",async()=>{
    const first=await getHostedGenesisOffering();
    const second=await getHostedGenesisOffering();
    expect(second.packageHash).toBe(first.packageHash);
    expect(first).toMatchObject({packageKind:"recipient_offering",packageVersion:"pinecoene.offering-package.v0.1",offering:{offeringId:"genesis-demonstration"},projection:{permissions:{allowSound:false,encounterTelemetry:"none"}},encounterReturn:{successorConsideration:"not_permitted"}});
    expect(first).not.toHaveProperty("expiresAt");
    expect(JSON.stringify(first)).not.toContain("No owner-private source");
  });

  it("keeps lower resolutions monotonic",async()=>{
    const artifact=await compileStudioArtifact(await getFixtureManifest("pcn-0001"));
    const packages=await Promise.all((["R0","R1","R2","R3","R4","R5"] as const).map((resolution)=>buildGoverningOfferingPackage(artifact,{resolution,address:"latent",expression:{schemaVersion:"pinecoene.expression.v0.2",finish:"metal",temperament:"solemn",dedication:""},title:"Resolution test",senderSnapshot:"Fixture",mode:"same_browser_preview",basis:"fixture_authored"})));
    expect(packages.map((value)=>value.projection.record.length)).toEqual([0,15,15,15,15,15]);
    expect(packages.map((value)=>Boolean(value.projection.scene))).toEqual([false,false,true,true,true,true]);
    expect(packages.map((value)=>value.projection.permissions.allowReplay)).toEqual([false,false,false,false,true,true]);
    expect(packages.map((value)=>Boolean(value.encounterReturn))).toEqual([false,false,false,false,false,true]);
  });

  it("fails closed when package bytes change without a new hash",async()=>{
    const original=await getHostedGenesisOffering();
    const tampered={...original,offering:{...original.offering,title:"Counterfeit title"}};
    await expect(verifyGoverningOfferingPackage(tampered)).rejects.toThrow("package hash mismatch");
  });
});
