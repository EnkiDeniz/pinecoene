import { notFound,permanentRedirect } from "next/navigation";
import { FIXTURE_IDS } from "@/lib/studio-fixtures";
export default async function LegacyMakePage({searchParams}:{searchParams:Promise<{fixture?:string}>}){const{fixture}=await searchParams;if(!fixture)permanentRedirect("/studio/new");if(!FIXTURE_IDS.includes(fixture as (typeof FIXTURE_IDS)[number]))notFound();permanentRedirect(`/studio/new?fixture=${fixture}`);}
