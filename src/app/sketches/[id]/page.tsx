import { notFound,permanentRedirect } from "next/navigation";
import { LegacyStudyRedirect } from "@/components/studio/LegacyStudyRedirect";
import { FIXTURE_IDS } from "@/lib/studio-fixtures";
export default async function LegacySketchPage({params,searchParams}:{params:Promise<{id:string}>;searchParams:Promise<{study?:string}>}){const [{id},{study}]=await Promise.all([params,searchParams]);if(!FIXTURE_IDS.includes(id as (typeof FIXTURE_IDS)[number]))notFound();if(study)return <LegacyStudyRedirect fixtureId={id} studyId={study}/>;permanentRedirect(`/studio/specimens/${id}`);}
