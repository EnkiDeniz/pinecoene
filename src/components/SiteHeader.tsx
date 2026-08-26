import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function SiteHeader({ quiet = false }: { quiet?: boolean }) {
  return (
    <header className={quiet ? "siteHeader siteHeaderQuiet" : "siteHeader"}>
      <Link className="wordmark" href="/" aria-label="Pinecœne home">
        pinecœne
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/w/pcn-0002">Witness</Link>
        <Link className="makeLink" href="/make">
          Make your own <ArrowUpRight aria-hidden="true" weight="light" />
        </Link>
      </nav>
    </header>
  );
}
