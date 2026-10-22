import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import { albums, shots } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuinonderhoud",
  description: "Uw tuin het gehele jaar op haar mooist. Onderhoudscontracten naar uw wens in de Hof van Twente.",
};

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
      <div data-section="uitleg" className="mx-auto max-w-3xl space-y-4 px-5 pb-6 sm:px-6">
        <p>Wij bieden onderhoudscontracten naar uw wens voor particulier en bedrijf. Denk aan een voorjaarsbeurt, een najaarsbeurt en wekelijks onderhoud daartussenin.</p>
        <p>Voor tuinonderhoud in {site.area} komen wij graag bij u langs voor een vrijblijvend gesprek.</p>
        <p>Tip: mocht u door omstandigheden als vakantie, tijdgebrek, leeftijd of ziekte uw tuin willen laten verzorgen, neem dan contact met ons op.</p>
      </div>
      <section data-section="voorbeelden" className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Onderhoud in beeld</h2>
        <Lightbox photos={album.photos} />
      </section>
      <EndCta />
    </>
  );
}
