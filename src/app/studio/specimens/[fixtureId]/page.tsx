import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudioInstrument } from "@/components/studio/StudioInstrument";
import { compileStudioArtifact } from "@/lib/studio-compiler";
import { FIXTURE_IDS,getFixtureManifest } from "@/lib/studio-fixtures";
export const metadata:Metadata={title:"Studio specimen",robots:{index:false,follow:false}};
export const dynamicParams=false;
export function generateStaticParams(){return FIXTURE_IDS.map((fixtureId)=>({fixtureId}));}
export default async function SpecimenPage({params}:{params:Promise<{fixtureId:string}>}){const {fixtureId}=await params;if(!FIXTURE_IDS.includes(fixtureId as (typeof FIXTURE_IDS)[number]))notFound();const artifact=await compileStudioArtifact(await getFixtureManifest(fixtureId as (typeof FIXTURE_IDS)[number]));return <StudioInstrument initialArtifact={artifact}/>;}
