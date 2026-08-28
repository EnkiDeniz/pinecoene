import type { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = { title:"More", description:"Optional depth: the science, art, making, and unfinished future of Pinecœne." };
const entries = [["Science","/science","What would have to be true—and what would prove the idea wrong."],["Art","/art","Beauty under constraint, wonder without standing inflation, and the form as a body for unfamiliarity."],["How it’s made","/how","Record, Reading, Admission, Fold, Offering, Return, and Successor."],["What’s next","/next","The Thin Fold, Pinecœne Becoming, lawful intake, real Offering, and Œdit."]] as const;
export default function MorePage() { return <main className="plainPublicPage morePage"><header><p className="publicEyebrow">MORE · OPTIONAL DEPTH</p><h1>The object comes first.<br /><em>These are the latches.</em></h1><p>Open only the part that made you curious.</p></header><section className="moreIndex">{entries.map(([title,href,copy],index) => <Link key={href} href={href}><span>0{index+1}</span><h2>{title}</h2><p>{copy}</p><strong>Open →</strong></Link>)}</section></main>; }
