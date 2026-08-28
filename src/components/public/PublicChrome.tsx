import Link from "next/link";
import type { ReactNode } from "react";
import { PublicNavigation } from "@/components/public/PublicNavigation";

export function PublicChrome({ children }: { children: ReactNode }) {
  return (
    <div className="publicWorld">
      <header className="publicHeader">
        <Link className="publicBrand" href="/" prefetch={false}>Pinecœne</Link>
        <PublicNavigation />
      </header>
      {children}
      <footer className="publicFooter">
        <div><Link className="publicBrand" href="/" prefetch={false}>Pinecœne</Link><p>A shape that remembers how it became.</p></div>
        <nav aria-label="Explore Pinecœne"><Link href="/works" prefetch={false}>Works</Link><Link href="/join" prefetch={false}>Join</Link><Link href="/more" prefetch={false}>More</Link></nav>
        <p className="publicProvenance">PUBLIC DOOR CANDIDATE V0.2 · FIXTURE-AUTHORED · NOINDEX</p>
      </footer>
    </div>
  );
}
