import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
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
        photo={shots.ontwerpTuin}
      />
      <div data-section="uitleg" className="mx-auto max-w-3xl space-y-4 px-5 pb-6 sm:px-6">
        <p>Kom gerust eens langs op ons plantencentrum {site.place}. Hier vindt u zeker inspiratie. Nog meer ideeën haalt u uit de albums op deze site, of uit de fotoalbums op het plantencentrum.</p>
        <p>Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging. We lopen samen door de tuin, u geeft uw wensen aan, en u ontvangt een handgetekend ontwerp inclusief een kostenplaatje.</p>
        <p>Een moodboard helpt om vooraf te zien of materialen en sfeer bij elkaar passen. Neem gerust contact op voor een vrijblijvende afspraak in {site.area}.</p>
      </div>
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Handgetekende ontwerpen</h2>
        <Lightbox photos={album.photos} />
      </section>
      <EndCta />
    </>
  );
}
