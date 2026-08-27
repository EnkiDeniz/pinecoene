import Link from "next/link";
import type { ReactNode } from "react";

const primary = [
  ["The Bet", "/"],
  ["The Science", "/science"],
  ["Sketches", "/sketches"],
  ["Use it", "/use"],
] as const;

export function PublicChrome({ children }: { children: ReactNode }) {
  return (
    <div className="publicWorld">
      <header className="publicHeader">
        <Link className="publicBrand" href="/" prefetch={false}>Pinecœne <span>A work that remembers</span></Link>
        <nav aria-label="Primary navigation">{primary.map(([label, href]) => <Link key={href} href={href} prefetch={false}>{label}</Link>)}</nav>
      </header>
      {children}
      <footer className="publicFooter">
        <div><Link className="publicBrand" href="/" prefetch={false}>Pinecœne</Link><p>A receipt-bound format for inquiry.</p></div>
        <nav aria-label="Source and approach"><Link href="/approach" prefetch={false}>Approach</Link><Link href="/master" prefetch={false}>Master <small>candidate</small></Link><Link href="/theorem" prefetch={false}>Theorem <small>candidate</small></Link></nav>
        <p className="publicProvenance">LKN-PCN-PRD-001 · proposal-derived public reading · candidate · unsealed</p>
      </footer>
    </div>
  );
}
