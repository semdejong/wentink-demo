import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import { albums, shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuinrenovatie",
  description: "Behoud de goede elementen van uw tuin en verbeter waar nodig. Voordeliger dan volledig vernieuwen.",
};

const redenen = [
  "Als uw tuin donkere of schrale hoeken kent",
  "Na een verbouwing, om het evenwicht tussen huis en tuin te herstellen",
  "Als uw woning te koop staat en de tuin representatief moet zijn",
  "Als u de tuin anders wilt gaan gebruiken",
  "Wanneer de inrichting nog volgens de smaak van de vorige bewoner is",
];

export default function TuinrenovatiePage() {
  const album = albums.find((item) => item.id === "renovatie")!;
  return (
    <>
      <PageHero
        kicker="Renovatie"
        title="De basis blijft, de tuin wordt weer van u"
        lede="Een slecht gazon, een verzakte oprit of verwilderde beplanting? We behouden de goede elementen en verbeteren waar nodig. Met een kleine ingreep kan uw tuin al een hele metamorfose ondergaan."
        photo={shots.renovatieHeader}
      />
      <div data-section="uitleg" className="mx-auto max-w-3xl space-y-4 px-5 pb-6 sm:px-6">
        <h2 className="font-serif text-3xl">Denk aan tuinrenovatie</h2>
        <ul className="list-disc space-y-1 pl-5">
          {redenen.map((reden) => (
            <li key={reden}>{reden}</li>
          ))}
        </ul>
        <p>Tuinrenovatie is voordeliger dan volledig vernieuwen. Daar waar mogelijk gaan we de bestrating, accessoires en beplanting hergebruiken. Die elementen hoeven daarom niet aangekocht te worden. Het geeft uw tuin bovendien gelijk weer een volwassen uitstraling.</p>
        <p>Vertrouw op ons advies over het hergebruik van beplanting, sierbestrating, tuinaccessoires, waterpartijen en houtdelen als schutting en pergola’s.</p>
        <p>U krijgt vooraf duidelijk inzage in hoe de gerenoveerde tuin eruit gaat zien en welk budget daarvoor nodig is. Desgewenst maken we een tuinschets of ontwerp. We bespreken daarnaast ook het opvolgend tuinonderhoud, zodat u lang kunt blijven genieten.</p>
        <p>Neem gerust contact op voor een vrijblijvende afspraak in {site.area}.</p>
      </div>
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Renovatie in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
      <EndCta />
    </>
  );
}
