import type { Metadata } from "next";
import { VitalSignExperience } from "@/components/vital/VitalSignExperience";

export const metadata:Metadata={title:"Vital Sign — experimental study",description:"A clearly labelled experimental seven Presence study.",robots:{index:false,follow:false}};
export default function VitalSignPage(){return <VitalSignExperience />;}
