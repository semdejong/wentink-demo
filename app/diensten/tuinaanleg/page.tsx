import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import { albums, shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuinaanleg",
  description: "Tuinaanleg die harmoniëert met het omringende landschap, inclusief ontwerp en kostenplaatje.",
};

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
      <div data-section="uitleg" className="mx-auto max-w-3xl space-y-4 px-5 pb-6 sm:px-6">
        <p>Wat wilt u eigenlijk? Welke sfeer moet uw tuin uitademen, welke materialen passen daarbij, en wilt u vooral in de zon zitten of liever in de schaduw een boek lezen? Een goed tuinontwerp helpt u een harmonieuze tuin te maken.</p>
        <p>Een handig hulpmiddel: maak een moodboard. Blader tuinmagazines door of zoek online, en breng afbeeldingen van stijl, materialen en meubels bij elkaar. Zo ziet u of alles bij elkaar past.</p>
        <p>Wilt u het echt goed aanpakken? Laat dan door ons een tuinontwerp maken. Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging. Vervolgens lopen we samen door uw tuin en u mag al uw wensen aangeven. Onze hoveniers voorzien u van waardevolle adviezen, zodat uw tuin ook een praktische leefbare tuin wordt. Daarna maken we het tuinontwerp, inclusief een kostenplaatje. Zo ziet u direct of uw ideale tuin binnen uw budget past.</p>
        <p>Neem gerust contact op voor een vrijblijvende afspraak in {site.area}. Wij komen graag bij u langs.</p>
      </div>
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Aanleg in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
      <EndCta />
    </>
  );
}
