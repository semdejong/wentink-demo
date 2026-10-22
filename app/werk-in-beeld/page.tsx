import type { Metadata } from "next";
import EndCta from "@/components/EndCta";
import Lightbox from "@/components/Lightbox";
import { albums, shots } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Werk in beeld",
  description: "Foto's van aanleg, onderhoud, renovatie, landschapstuinen, het plantencentrum en handgetekende ontwerpen.",
};

export default function WerkPage() {
  return (
    <>
      <section data-section="pagina-hero">
        <div className="strip h-[38vw] min-h-[200px] max-h-[380px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shots.bomen.src} alt={shots.bomen.alt} />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
          <p className="plant-tag">Werk in beeld</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl">Werk, gesorteerd op soort</h1>
          <p className="mt-4 max-w-2xl text-aarde">We hebben schitterend werk dat we u graag laten zien. Hieronder staat het per soort: aanleg, onderhoud, renovatie, landschapstuinen, plantencentrum en ontwerp.</p>
        </div>
      </section>
      {albums.map((album) => (
        <section key={album.id} id={album.id} data-section={album.id} className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
          <h2 className="font-serif text-4xl">{album.title}</h2>
          <p className="mt-2 mb-4 max-w-2xl">{album.intro}</p>
          <Lightbox photos={album.photos} />
        </section>
      ))}
      <EndCta />
    </>
  );
}
