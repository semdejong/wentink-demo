import type { Metadata } from "next";
import Link from "next/link";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import SiblingNav from "@/components/SiblingNav";
import { processSteps } from "@/lib/copy";
import { albums, shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuinaanleg",
  description: "Tuinaanleg die harmoniëert met het omringende landschap, inclusief ontwerp en kostenplaatje.",
};

const vragen = [
  { q: "Welke sfeer?", a: "Welke sfeer moet uw tuin uitademen, en welke materialen passen daarbij?" },
  { q: "Zon of schaduw?", a: "Wilt u vooral in de zon zitten, of liever in de schaduw een goed boek lezen?" },
  { q: "Eén geheel?", a: "Een ontwerp voorkomt dat de tuin een verzameling losse ideeën wordt." },
];

export default function TuinaanlegPage() {
  const album = albums.find((item) => item.id === "aanleg")!;
  return (
    <>
      <PageHero
        kicker="Aanleg"
        title="Een tuin waar u jaren plezier van houdt"
        lede="Wentink heeft vele grotere en kleine tuinen aangelegd die perfect harmoniëren met de omliggende landschappelijke omgeving. Desgewenst leggen we bijzondere tuinen aan."
        photo={shots.aanlegHeader}
      />
      <section data-section="vragen" className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3 sm:px-6">
        {vragen.map((item) => (
          <article key={item.q} className="rounded-[1.4rem] bg-paper p-5">
            <h2 className="font-serif text-3xl">{item.q}</h2>
            <p className="mt-2 text-base">{item.a}</p>
          </article>
        ))}
      </section>
      <div data-section="uitleg" className="mx-auto max-w-3xl space-y-4 px-5 py-4 sm:px-6">
        <h2 className="font-serif text-3xl">Begin met een moodboard</h2>
        <p>Blader tuinmagazines door en verzamel afbeeldingen van uw ideale tuinstijl, materialen en meubels. U kunt ook online zoeken en de beelden bij elkaar brengen. Zo ziet u of alles in dezelfde stijl is, en of het daadwerkelijk bij elkaar past.</p>
        <p>Wilt u het echt goed aanpakken? Laat dan door ons een tuinontwerp maken. Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging. Vervolgens lopen we samen door uw tuin en u mag al uw wensen aangeven.</p>
        <p>Onze hoveniers voorzien u van waardevolle adviezen, zodat uw tuin ook een praktische leefbare tuin wordt. Daarna maken we het tuinontwerp, inclusief een kostenplaatje. Zo ziet u direct of uw ideale tuin binnen uw budget past, of dat u nog iets wilt aanpassen.</p>
        <p>Neem gerust contact op voor een vrijblijvende afspraak in {site.area}.</p>
      </div>
      <section data-section="stappen" className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.label} className="rounded-2xl border border-line p-4">
              <span className="text-sm font-bold tracking-widest text-wentink">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-2xl">{step.label}</h3>
              <p className="text-base">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          Materialen kunt u vooraf bekijken op het{" "}
          <Link href="/plantencentrum" className="font-bold underline underline-offset-4">plantencentrum</Link>, in echte patronen op de grond.
        </p>
      </section>
      <QuoteBand
        name="Raymond Slag"
        quote="Ze verzorgen voor ons het tuinonderhoud en ook het aanleggen tijdens de nieuwbouw is door hen perfect uitgevoerd."
      />
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Aanleg in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
      <SiblingNav current="/diensten/tuinaanleg" />
      <EndCta />
    </>
  );
}
