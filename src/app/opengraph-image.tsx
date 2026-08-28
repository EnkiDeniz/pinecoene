import { ImageResponse } from "next/og";

export const alt = "Pinecœne — a shape for an idea";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"64px 72px", background:"#080808", color:"#eee8de", fontFamily:"serif", border:"1px solid #332b22" }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontFamily:"monospace", fontSize:16, letterSpacing:"0.18em", color:"#a27b48" }}><span>PINECŒNE</span><span>PUBLIC DOOR · V0.2</span></div>
      <div style={{ display:"flex", alignItems:"center", gap:58 }}>
        <div style={{ display:"flex", width:170, height:170, border:"1px solid #9b7442", borderRadius:"50%", alignItems:"center", justifyContent:"center", position:"relative" }}>
          <div style={{ display:"flex", width:92, height:92, border:"1px solid #6b8ba0", transform:"rotate(45deg)" }} />
        </div>
        <div style={{ display:"flex", flexDirection:"column", fontSize:62, lineHeight:1.02, letterSpacing:"-0.035em" }}><span>This is a Pinecœne.</span><span style={{ color:"#b7aa96", fontStyle:"italic" }}>A shape for an idea.</span></div>
      </div>
      <div style={{ fontFamily:"monospace", fontSize:14, letterSpacing:"0.14em", color:"#77716a" }}>GENESIS · PCN-0001 · FORM AT REST · OPEN BY LAW</div>
    </div>,
    size,
  );
}
