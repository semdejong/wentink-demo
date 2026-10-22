import type { Metadata } from "next";
import Link from "next/link";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import SiblingNav from "@/components/SiblingNav";
import { albums, shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuinontwerp",
  description: "Groen advies en handgetekende tuinontwerpen. Ook samen met de doe-het-zelver.",
};

export default function TuinontwerpPage() {
  const album = albums.find((item) => item.id === "ontwerp")!;
  return (
    <>
      <PageHero
        kicker="Tuinarchitectuur"
        title="Groen advies, op papier en in de tuin"
        lede="Ook voor groen advies staan wij altijd voor u klaar. De doe-het-zelver kan samen met ons een ontwerp maken en deze, indien gewenst met vakkundige hulp, geheel zelf aanleggen."
        photo={shots.ontwerp}
      />
      <section data-section="uitleg" className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl">Samen door de tuin</h2>
          <p>Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging. We lopen samen door de tuin, u geeft uw wensen aan, en u ontvangt een handgetekend ontwerp inclusief een kostenplaatje.</p>
          <p>Een moodboard helpt om vooraf te zien of materialen en sfeer bij elkaar passen. Verzamel beelden van stijl, materialen en meubels, en leg ze naast elkaar.</p>
          <p>Neem gerust contact op voor een vrijblijvende afspraak in {site.area}.</p>
        </div>
        <div className="rounded-[1.6rem] bg-dennen p-6 text-linen">
          <p className="plant-tag">Inspiratie</p>
          <h2 className="mt-4 font-serif text-3xl">Eerst kijken op de kwekerij</h2>
          <p className="mt-3 text-linen/85">Kom gerust eens langs op ons plantencentrum {site.place}. Hier vindt u zeker inspiratie. Nog meer ideeën haalt u uit de albums op deze site, of uit de fotoalbums op het plantencentrum.</p>
          <p className="mt-3 text-linen/85">{site.saturday}</p>
          <Link href="/plantencentrum" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-linen px-5 font-bold text-dennen">
            Naar het plantencentrum
          </Link>
        </div>
      </section>
      <QuoteBand
        name="Marc van den Burg"
        quote="Wentink heeft zowel ontwerp, aanleg als ook het jaarlijks onderhoud van onze tuin in beheer."
      />
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <h2 className="font-serif text-4xl">Handgetekende ontwerpen</h2>
        <p className="mt-2 mb-4 max-w-2xl">Plattegronden met gazon, terrassen, split en borders, getekend na een rondgang door de tuin.</p>
        <Lightbox photos={album.photos} />
      </section>
      <SiblingNav current="/diensten/tuinontwerp" />
      <EndCta />
    </>
  );
}
