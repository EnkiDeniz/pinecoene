import type { Metadata } from "next";
import { LocalStudyRoute } from "@/components/studio/LocalStudyRoute";
export const metadata:Metadata={title:"Local Studio study",robots:{index:false,follow:false}};
export default async function StudyPage({params}:{params:Promise<{studyId:string}>}){const {studyId}=await params;return <LocalStudyRoute studyId={studyId}/>;}
