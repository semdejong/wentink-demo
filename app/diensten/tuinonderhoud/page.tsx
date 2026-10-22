import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import SiblingNav from "@/components/SiblingNav";
import { seasons } from "@/lib/copy";
import { albums, shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuinonderhoud",
  description: "Uw tuin het gehele jaar op haar mooist. Onderhoudscontracten naar uw wens in de Hof van Twente.",
};

const vormen = [
  { title: "Wekelijks", text: "Van wekelijks tuinonderhoud tot het gras maaien en de borders bijhouden, voor particulier en bedrijf." },
  { title: "Voor- en najaarsbeurt", text: "Twee keer per jaar de grote beurt: snoeiwerk en kleine aanpassingen, altijd in goed overleg." },
  { title: "Jaarcontract", text: "Een contract naar uw wens, voor particulier en bedrijf. Voorjaarsbeurt, najaarsbeurt en wekelijks onderhoud kunnen samen." },
];

export default function TuinonderhoudPage() {
  const album = albums.find((item) => item.id === "onderhoud")!;
  return (
    <>
      <PageHero
        kicker="Onderhoud"
        title="Uw tuin het gehele jaar op haar mooist"
        lede="Voor het tuinonderhoud biedt Wentink eveneens de oplossing. Van wekelijks tuinonderhoud tot een jaarlijkse grote beurt."
        photo={shots.onderhoudHeader}
      />
      <div data-section="uitleg" className="mx-auto max-w-3xl space-y-4 px-5 py-4 sm:px-6">
        <p>Wij bieden onderhoudscontracten naar uw wens voor particulier en bedrijf. Voor tuinonderhoud in {site.area} komen wij graag bij u langs voor een vrijblijvend gesprek.</p>
        <p>Het doorspreken vooraf zorgt voor een goede afstemming. Daarna voeren we het werk uit: maaien, snoeien, borders schoonhouden en waar nodig een kleine aanpassing.</p>
      </div>
      <section data-section="vormen" className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3 sm:px-6">
        {vormen.map((item, index) => (
          <article key={item.title} className="rounded-[1.4rem] border border-line bg-paper p-5">
            <p className="text-sm font-bold tracking-[0.16em] text-wentink">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 font-serif text-3xl">{item.title}</h2>
            <p className="mt-2 text-base">{item.text}</p>
          </article>
        ))}
      </section>
      <section data-section="seizoenen" className="bg-muted py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-serif text-4xl">Door het jaar</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((season) => (
              <li key={season.label} className="rounded-2xl bg-paper p-4">
                <p className="text-xs font-bold tracking-[0.16em] uppercase text-aarde">{season.label}</p>
                <h3 className="mt-1 font-serif text-2xl">{season.title}</h3>
                <p className="mt-1 text-base">{season.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl rounded-2xl bg-paper p-5">
            Tip: mocht u door omstandigheden als vakantie, tijdgebrek, leeftijd of ziekte uw tuin willen laten verzorgen, neem dan contact met ons op.
          </p>
        </div>
      </section>
      <QuoteBand
        name="Familie Pieffers"
        quote="Contact loopt altijd in goed overleg, zodat onze tuin ieder seizoen er vrolijk bij staat."
      />
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Onderhoud in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
      <SiblingNav current="/diensten/tuinonderhoud" />
      <EndCta />
    </>
  );
}
