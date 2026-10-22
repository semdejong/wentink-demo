import type { Metadata } from "next";
import AfspraakForm from "@/components/AfspraakForm";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel 0547-362825 of 06-55336074, of mail info@hoveniersbedrijf-wentink.nl. Plantencentrum tussen Markelo en Rijssen.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-2">
      <section data-section="gegevens">
        <p className="plant-tag">Contact</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-6xl">Wij zijn u graag van dienst</h1>
        <p className="mt-4">Bent u benieuwd wat wij voor u kunnen betekenen? Bel, mail of vraag een vrijblijvende afspraak aan.</p>
        <ul className="mt-6 space-y-2 text-lg">
          <li>Telefoon: <a className="font-bold underline underline-offset-4" href={site.phoneTel}>{site.phoneDisplay}</a></li>
          <li>Mobiel: <a className="font-bold underline underline-offset-4" href={site.mobileTel}>{site.mobileDisplay}</a></li>
          <li>E-mail: <a className="font-bold underline underline-offset-4" href={site.mailto}>{site.email}</a></li>
        </ul>
        <h2 className="mt-8 font-serif text-3xl">Openingstijden plantencentrum</h2>
        <ul className="mt-3">
          {site.hours.map((row) => (
            <li key={row.label}>{row.label}: {row.value}</li>
          ))}
        </ul>
        <p className="mt-3">{site.saturday}</p>
        <p className="mt-4">{site.place}.</p>
        <div className="mt-6 grid gap-3">
          {routes.map((route) => (
            <article key={route.from}>
              <h3 className="font-serif text-2xl">{route.from}</h3>
              <p className="text-base">{route.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section data-section="formulier" className="rounded-[1.6rem] border border-line bg-paper p-5 sm:p-6">
        <h2 className="mb-4 font-serif text-3xl">Afspraak aan huis</h2>
        <AfspraakForm compact />
      </section>
    </div>
  );
}
