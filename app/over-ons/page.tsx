import type { Metadata } from "next";
import Link from "next/link";
import EndCta from "@/components/EndCta";
import { testimonials, tuinkeur } from "@/lib/copy";
import { shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Hoveniersbedrijf Wentink is al sinds 1986 dé hovenier in de Hof van Twente. Tuinkeur gecertificeerd.",
};

export default function OverOnsPage() {
  return (
    <>
      <section data-section="pagina-hero">
        <div className="strip h-[38vw] min-h-[200px] max-h-[360px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shots.hero.src} alt={shots.hero.alt} />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-6">
          <div className="relative z-10 -mt-14 max-w-3xl rounded-[1.6rem] border border-line bg-paper/95 p-6 shadow-sm sm:-mt-20 sm:p-8">
            <p className="plant-tag">Over Wentink</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Al sinds 1986 dé hovenier in de Hof van Twente</h1>
            <p className="mt-4">{site.intro}</p>
            <p className="mt-3">{site.kijkje}</p>
            <p className="mt-3">Het bedrijf en het plantencentrum liggen {site.place}, met aanliggend 2 hectare kwekerij.</p>
          </div>
        </div>
      </section>
      <section data-section="twee-werelden" className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:px-6 md:grid-cols-2">
        <article className="flex h-full flex-col rounded-[1.6rem] bg-dennen p-6 text-linen">
          <p className="plant-tag">Hovenier</p>
          <h2 className="mt-4 font-serif text-3xl">Laat uw tuin doen</h2>
          <p className="mt-3 text-linen/85">Onderhoud, aanleg, renovatie en een handgetekend ontwerp. Wij komen bij u langs, nemen de maten op en lopen samen door de tuin.</p>
          <div className="mt-auto pt-6">
            <Link href="/afspraak" data-cta="offerte" className="inline-flex min-h-11 items-center rounded-full bg-linen px-5 font-bold text-dennen">Afspraak aan huis</Link>
          </div>
        </article>
        <article className="flex h-full flex-col rounded-[1.6rem] border border-line bg-paper p-6">
          <p className="plant-tag">Kwekerij</p>
          <h2 className="mt-4 font-serif text-3xl">Kom zelf kijken</h2>
          <p className="mt-3 text-aarde">Het plantencentrum ligt {site.place}, met 2 hectare kwekerij en 60 soorten bomen uit voorraad. {site.saturday}</p>
          <div className="mt-auto pt-6">
            <Link href="/plantencentrum" className="inline-flex min-h-11 items-center rounded-full bg-dennen px-5 font-bold text-linen">Openingstijden en route</Link>
          </div>
        </article>
      </section>
      <section data-section="tuinkeur" className="bg-paper py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 sm:grid-cols-[auto_1fr] sm:px-6">
          <img src="/tuinkeur-logo.jpg" alt="Logo Tuinkeur gecertificeerd" width={120} height={120} className="rounded-md bg-white p-2" />
          <div>
            <h2 className="font-serif text-4xl">Tuinkeur</h2>
            <p className="mt-3">Wij zijn Tuinkeur gecertificeerd. Dit houdt voor u in dat u zaken doet met een bedrijf die:</p>
            <ul className="mt-3 grid gap-1 sm:grid-cols-2">
              {tuinkeur.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section data-section="ervaringen" className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <h2 className="font-serif text-4xl">Wat klanten zeggen</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure key={item.name} className={`flex h-full flex-col rounded-[1.4rem] border border-line bg-paper p-5 ${index === testimonials.length - 1 ? "lg:col-span-2" : ""}`}>
              <blockquote><p>{item.text}</p></blockquote>
              <figcaption className="mt-auto pt-4 text-sm font-bold tracking-wide uppercase">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section id="werken" data-section="werken-bij" className="bg-muted py-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="font-serif text-4xl">Werken bij Wentink</h2>
          <p className="mt-3">Wilt u bij ons werken? Bel of mail ons. We vertellen u graag of er plek is. U kunt ook langskomen op het plantencentrum tijdens de openingstijden.</p>
          <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-dennen px-5 font-bold text-linen">
            Contact opnemen
          </Link>
        </div>
      </section>
      <EndCta />
    </>
  );
}
