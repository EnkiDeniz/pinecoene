import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound">
      <p className="eyebrow">No offering rests here</p>
      <h1>This Locket could not be found.</h1>
      <p>The address may be incomplete, expired, or part of a future transport.</p>
      <Link className="primaryButton" href="/">Return to Pinecœne</Link>
    </main>
  );
}
