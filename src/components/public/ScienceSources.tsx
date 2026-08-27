import { SCIENCE_SOURCES } from "@/lib/public-content";

export function ScienceSources() {
  return <section className="scienceSources" aria-labelledby="sources-title"><p className="publicEyebrow">SOURCE MAP</p><h2 id="sources-title">Receipts for the neighboring work.</h2><p>These sources open testable doors. They do not prove Pinecœne.</p><ol>{SCIENCE_SOURCES.map((source) => <li id={`source-${source.id}`} key={source.id}><span>{source.sourceClass}</span><h3>{source.title}</h3><p>{source.authors} · {source.year}</p><small>{source.limitation}</small><a href={source.url} rel="noreferrer">Open source ↗</a></li>)}</ol></section>;
}
