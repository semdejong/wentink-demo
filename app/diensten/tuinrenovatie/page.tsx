import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import SiblingNav from "@/components/SiblingNav";
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

const pijlers = [
  { title: "Behouden", text: "Een slecht gazon, een verzakte oprit of verwilderde beplanting: we houden de goede elementen en verbeteren waar nodig. Met een kleine ingreep kan de tuin al een metamorfose ondergaan." },
  { title: "Hergebruiken", text: "Tuinrenovatie is voordeliger dan volledig vernieuwen. Bestrating, accessoires en beplanting gaan we waar mogelijk hergebruiken. Die hoeven niet nieuw gekocht te worden, en de tuin heeft meteen weer een volwassen uitstraling." },
  { title: "Vooraf inzicht", text: "U krijgt vooraf duidelijk inzage in hoe de tuin eruit gaat zien en welk budget daarbij hoort. Desgewenst maken we een tuinschets of ontwerp, en we bespreken het onderhoud daarna." },
];

export default function TuinrenovatiePage() {
  const album = albums.find((item) => item.id === "renovatie")!;
  return (
    <>
      <PageHero
        kicker="Renovatie"
        title="De basis blijft, de tuin wordt weer van u"
        lede="Groeit het onkruid harder dan de bloemen, of nemen de bomen het licht op uw terras weg? Denk dan eens aan een tuinrenovatie."
        photo={shots.renovatieHeader}
      />
      <section data-section="pijlers" className="mx-auto grid max-w-6xl gap-4 px-5 py-8 lg:grid-cols-3 sm:px-6">
        {pijlers.map((item) => (
          <article key={item.title} className="rounded-[1.4rem] border border-line bg-paper p-5">
            <h2 className="font-serif text-3xl">{item.title}</h2>
            <p className="mt-2 text-base">{item.text}</p>
          </article>
        ))}
      </section>
      <section data-section="redenen" className="mx-auto max-w-3xl px-5 py-4 sm:px-6">
        <h2 className="font-serif text-3xl">Denk aan tuinrenovatie</h2>
        <ul className="mt-4 space-y-2">
          {redenen.map((reden) => (
            <li key={reden} className="flex gap-3">
              <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 bg-wentink" />
              <span>{reden}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">Vertrouw op ons advies over het hergebruik van beplanting, sierbestrating, tuinaccessoires, waterpartijen en houtdelen als schutting en pergola’s. Neem gerust contact op voor een vrijblijvende afspraak in {site.area}.</p>
      </section>
      <QuoteBand
        name="Paul Roescher"
        quote="Ook de bestrating is door de inzet van Wentink weer helemaal puik!"
      />
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Renovatie in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
      <SiblingNav current="/diensten/tuinrenovatie" />
      <EndCta />
    </>
  );
}
