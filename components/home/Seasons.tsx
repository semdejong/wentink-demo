import Link from "next/link";
import { seasons } from "@/lib/copy";

export default function Seasons() {
  return (
    <section data-section="onderhoud-door-het-jaar" className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
      <p className="plant-tag">Het jaar rond</p>
      <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">Onderhoud door het jaar</h2>
      <p className="mt-3 max-w-2xl">Uw tuin het gehele jaar op haar mooist.</p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {seasons.map((season) => (
          <li key={season.label} className="rounded-[1.4rem] border border-line bg-paper p-5">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-aarde">{season.label}</p>
            <h3 className="mt-2 font-serif text-2xl">{season.title}</h3>
            <p className="mt-2 text-base">{season.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl rounded-2xl bg-muted p-5">
        Tip: mocht u door omstandigheden als vakantie, tijdgebrek, leeftijd of ziekte uw tuin willen laten verzorgen, neem dan contact met ons op.
      </p>
      <Link href="/afspraak" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-wentink px-5 font-bold text-white">
        Onderhoudscontract bespreken
      </Link>
    </section>
  );
}
