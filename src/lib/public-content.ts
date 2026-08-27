export type PublicClaimStanding = "commitment" | "current_study" | "bet" | "possibility" | "refusal";

export type ScienceSourceClass = "empirical" | "formal" | "methodological" | "historical";

export interface ScienceSource {
  id: string;
  claimIds: string[];
  sourceClass: ScienceSourceClass;
  authors: string;
  year: number;
  title: string;
  url: string;
  limitation: string;
}

export interface SourceDocumentStanding {
  documentId: string;
  canonical: boolean;
  proposalDerived: boolean;
  candidate: boolean;
  sealed: boolean;
  sourceChecksum: string;
}

export const SCIENCE_SOURCES: ScienceSource[] = [
  { id:"shepard-1987", claimIds:["similarity-geometry"], sourceClass:"empirical", authors:"Roger N. Shepard", year:1987, title:"Toward a universal law of generalization for psychological science", url:"https://pubmed.ncbi.nlm.nih.gov/3629243/", limitation:"Supports a constrained account of psychological distance and generalization; not a universal geometry of thought." },
  { id:"gardenfors-2000", claimIds:["concept-regions"], sourceClass:"formal", authors:"Peter Gärdenfors", year:2000, title:"Conceptual Spaces: The Geometry of Thought", url:"https://mitpress.mit.edu/9780262572194/conceptual-spaces/", limitation:"Provides a research framework for conceptual representation; it does not validate Pinecœne’s compiler." },
  { id:"constantinescu-2016", claimIds:["abstract-trajectories"], sourceClass:"empirical", authors:"Alexandra Constantinescu, Jill O’Reilly, Timothy Behrens", year:2016, title:"Organizing conceptual knowledge in humans with a gridlike code", url:"https://pubmed.ncbi.nlm.nih.gov/27313047/", limitation:"Reports a grid-like signature in a constrained two-dimensional conceptual task; rival accounts and scope limits remain." },
  { id:"kriegeskorte-2008", claimIds:["cross-modal-structure"], sourceClass:"methodological", authors:"Nikolaus Kriegeskorte, Marieke Mur, Peter Bandettini", year:2008, title:"Representational similarity analysis", url:"https://www.frontiersin.org/journals/systems-neuroscience/articles/10.3389/neuro.06.004.2008/full", limitation:"Provides a comparison method for relational structures; it does not show Pinecœne survives translation." },
  { id:"memoli-2011", claimIds:["meaning-space-alignment"], sourceClass:"formal", authors:"Facundo Mémoli", year:2011, title:"Gromov–Wasserstein distances and the metric approach to object matching", url:"https://doi.org/10.1007/s10208-011-9093-5", limitation:"Establishes results for metric-measure spaces under explicit assumptions; possibility is not evidence of alignment." },
  { id:"krantz-1971", claimIds:["measurement"], sourceClass:"formal", authors:"David Krantz, R. Duncan Luce, Patrick Suppes, Amos Tversky", year:1971, title:"Foundations of Measurement, Volume I", url:"https://shop.elsevier.com/books/additive-and-polynomial-representations/krantz/978-0-12-425401-5", limitation:"Frames faithful representation between relational structures; Pinecœne has not yet earned its proposed theorem." },
  { id:"lakatos-1976", claimIds:["inquiry-history"], sourceClass:"historical", authors:"Imre Lakatos", year:1976, title:"Proofs and Refutations", url:"https://doi.org/10.1017/CBO9781139171472", limitation:"Shows the epistemic importance of conjecture, criticism, and repair; it does not provide a universal event grammar." },
];
