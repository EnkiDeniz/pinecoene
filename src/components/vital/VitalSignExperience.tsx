"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BezierCurve, SpeakerHigh, SpeakerSlash, WarningCircle } from "@phosphor-icons/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type VitalElement=HTMLElement&{focusIndex:number;intensity:number;openness:number;reducedMotion:boolean};
const PRESENCES=["Attention","Memory","Constraint","Difference","Return","Address","Rest"];

export function VitalSignExperience(){
  const ref=useRef<VitalElement|null>(null);
  const [ready,setReady]=useState(false);
  const [focus,setFocus]=useState(0);
  const [intensity,setIntensity]=useState(.45);
  const [openness,setOpenness]=useState(.62);
  const [soundOn,setSoundOn]=useState(false);
  const audioRef=useRef<AudioContext | undefined>(undefined);
  const reducedMotion=useReducedMotion();
  useEffect(()=>{let alive=true;void import("@/components/vital/pinecoene-vital").then(()=>{if(alive)setReady(true)});return()=>{alive=false;void audioRef.current?.close();}},[]);
  useEffect(()=>{const element=ref.current;if(!element||!ready)return;element.focusIndex=focus;element.intensity=intensity;element.openness=openness;element.reducedMotion=reducedMotion;},[focus,intensity,openness,ready,reducedMotion]);
  async function toggleSound(){
    if(soundOn){await audioRef.current?.close();audioRef.current=undefined;setSoundOn(false);return;}
    const context=new AudioContext();await context.resume();const gain=context.createGain();gain.gain.value=.025;gain.connect(context.destination);
    [110,165,220].forEach((frequency,index)=>{const oscillator=context.createOscillator();const tone=context.createGain();oscillator.type="sine";oscillator.frequency.value=frequency+focus*7;tone.gain.value=1/(index+1);oscillator.connect(tone);tone.connect(gain);oscillator.start();});
    audioRef.current=context;setSoundOn(true);
  }
  return <main className="vitalExperience"><header className="instrumentTopbar studioTopbar"><Link className="instrumentBrand" href="/sketches"><ArrowLeft aria-hidden="true" /> Pinecœne <span>Experimental study</span></Link><div className="artifactIdentity"><strong>7 PRESENCE · V0.1</strong><span>NOT FOLD AUTHORITY</span></div><nav><button onClick={()=>void toggleSound()}>{soundOn?<SpeakerHigh aria-hidden="true"/>:<SpeakerSlash aria-hidden="true"/>} Sound {soundOn?"on":"off"}</button></nav></header><section className="vitalWorkspace"><div className="vitalStage"><div className="stageTelemetry"><span>EXPERIMENTAL 7 PRESENCE STUDY</span><span>CURATED OPERATION</span><span>{PRESENCES[focus].toUpperCase()}</span></div><pinecoene-vital ref={ref}/><div className="stageCaption"><p>{PRESENCES[focus]} is foregrounded.</p><span>LIGHT, GEOMETRY AND SOUND ARE CURATED INPUT RESPONSES</span></div></div><aside className="vitalControls"><header className="inspectorHeading"><p className="instrumentEyebrow">EXPERIMENT · NOT A CLAIM</p><h1>Vital Sign</h1><p>Operate a separate study of seven relational presences. It shares material and camera craft with the Sketches but has no authority over a Fold.</p></header><div className="inspectorSection"><h3>Foreground one Presence</h3><div className="presenceRail">{PRESENCES.map((presence,index)=><button key={presence} data-selected={focus===index} onClick={()=>setFocus(index)}><span>{String(index+1).padStart(2,"0")}</span><strong>{presence}</strong></button>)}</div></div><div className="inspectorSection vitalSliders"><label>Signal intensity <output>{Math.round(intensity*100)}%</output><input type="range" min="0" max="1" step="0.01" value={intensity} onChange={(event)=>setIntensity(Number(event.target.value))}/></label><label>Relational openness <output>{Math.round(openness*100)}%</output><input type="range" min="0" max="1" step="0.01" value={openness} onChange={(event)=>setOpenness(Number(event.target.value))}/></label></div><div className="inspectorSection vitalTruth"><WarningCircle aria-hidden="true"/><div><strong>What this does not mean</strong><p>No live model is present. No consciousness, autonomous agency, sensing, inference, human state or Œdit state is claimed. The controls deterministically drive a local visual and optional audio response.</p></div></div><div className="inspectorSection"><BezierCurve aria-hidden="true"/><p className="vitalLaw">The Fold answers to an admitted record. Vital Sign answers only to these curated controls.</p></div></aside></section></main>;
}
