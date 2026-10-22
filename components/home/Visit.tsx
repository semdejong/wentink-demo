import Link from "next/link";
import { routes, site } from "@/lib/site";

export default function Visit() {
  return (
    <>
      <section data-section="werkgebied" className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <p className="plant-tag">Werkgebied</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">In de Hof van Twente, en de plaatsen eromheen</h2>
        <p className="mt-4 max-w-2xl">
          Neem gerust contact op voor een vrijblijvende afspraak in {site.area}. Wij komen graag bij u langs.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {site.places.map((place) => (
            <li key={place} className="plant-tag text-base normal-case tracking-normal">{place}</li>
          ))}
          <li className="plant-tag text-base normal-case tracking-normal">Omliggende plaatsen</li>
        </ul>
      </section>
      <section data-section="openingstijden-route" className="bg-muted py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="plant-tag">Openingstijden</p>
            <h2 className="mt-4 font-serif text-4xl">Plantencentrum</h2>
            <ul className="mt-4 space-y-2">
              {site.hours.map((row) => (
                <li key={row.label} className="flex justify-between gap-4 border-b border-line py-2">
                  <span>{row.label}</span>
                  <span className="font-bold">{row.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">{site.saturday}</p>
            <p className="mt-3 text-base">
              Bent u zelf niet in bezit van een aanhanger, dan stellen wij deze vrijblijvend beschikbaar om onze producten te vervoeren.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl">Route</h2>
            <p className="mt-3">{site.place}.</p>
            <div className="mt-5 grid gap-4">
              {routes.map((route) => (
                <article key={route.from} className="rounded-2xl bg-paper p-4">
                  <h3 className="font-serif text-2xl">{route.from}</h3>
                  <p className="mt-1 text-base">{route.text}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center font-bold underline underline-offset-4">
              Alle contactgegevens
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
