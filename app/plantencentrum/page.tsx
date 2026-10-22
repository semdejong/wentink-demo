import type { Metadata } from "next";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import { albums, shots } from "@/lib/photos";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plantencentrum",
  description: "Plantencentrum en 2 hectare kwekerij aan de voet van de Friezenberg. Planten, bomen, bestrating en grond.",
};

export default function PlantencentrumPage() {
  const album = albums.find((item) => item.id === "plantencentrum")!;
  return (
    <>
      <section data-section="pagina-hero" className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="plant-tag">Plantencentrum</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl">Tussen Markelo en Rijssen</h1>
          <p className="mt-4 text-aarde">{site.placeLong}</p>
          <div className="mt-6 rounded-[1.4rem] border border-line bg-paper p-5">
            <h2 className="font-serif text-2xl">Openingstijden</h2>
            <ul className="mt-2">
              {site.hours.map((row) => (
                <li key={row.label} className="flex justify-between gap-4 border-b border-line py-1.5 text-base">
                  <span>{row.label}</span>
                  <span className="font-bold">{row.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-base">{site.saturday}</p>
          </div>
        </div>
        <figure className="photo-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shots.centrumHeader.src} alt={shots.centrumHeader.alt} width={900} height={520} className="aspect-[4/3]" />
        </figure>
      </section>

      <section id="bomen" data-section="beplanting" className="mx-auto max-w-3xl space-y-4 px-5 py-8 sm:px-6">
        <h2 className="font-serif text-4xl">Beplanting</h2>
        <p>Op het plantencentrum vindt u een keur aan tuinplanten, onder andere vaste planten, een- en tweejarige planten, sierheesters en coniferen voor haag en sier.</p>
        <p className="rounded-2xl bg-paper p-4 font-bold">
          Onze specialiteit: een zeer uitgebreide collectie, 60 soorten uit voorraad leverbaar. Sier- en laanbomen, fruitbomen, haag- en bosplantsoen.
        </p>
      </section>

      <section id="materialen" data-section="materialen" className="bg-paper py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl">Bestratingsmaterialen</h2>
            <p className="mt-3">Van betontegels tot natuursteen stapelblokken. De materialen staan op showhekken, en we hebben ze ook verwerkt op de grond in verschillende patronen, zodat u een beter beeld krijgt van wat u koopt.</p>
            <p className="mt-3">Verder zijn er vakken met kunstgras, vlonders van hout en composiet, en verhoogde bakken met diverse soorten split. U kunt hier tijdens openingstijden vrijblijvend een kijkje nemen.</p>
          </div>
          <div>
            <h2 className="font-serif text-4xl">Grond en mest</h2>
            <p className="mt-3">Altijd een ruime voorraad zakgoed: potgronden, tuinturf (ook los), compost (ook los, onkruidvrij), koemest, hoendermest en kunstmest.</p>
            <p className="mt-3">Standaard voorradig: compost, vulzand en ophoogzand, zwarte grond, gewassen grind en metselzand. Grotere hoeveelheden kunnen wij ook leveren.</p>
            <p className="mt-3">Bent u zelf niet in bezit van een aanhanger, dan stellen wij deze vrijblijvend beschikbaar. Van biels tot Bentheimer bak: op het plantencentrum staan we u graag met raad en daad bij.</p>
          </div>
        </div>
      </section>

      <section data-section="route" className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <h2 className="font-serif text-4xl">Route</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {routes.map((route) => (
            <article key={route.from} className="rounded-2xl border border-line p-4">
              <h3 className="font-serif text-2xl">{route.from}</h3>
              <p className="mt-2 text-base">{route.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6">
          Liever dat wij langskomen?{" "}
          <Link href="/afspraak" data-cta="offerte" className="font-bold underline underline-offset-4">Vraag een afspraak aan huis aan</Link>.
        </p>
      </section>

      <section data-section="fotos" className="mx-auto max-w-6xl px-5 pb-14 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Het plantencentrum in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
    </>
  );
}
