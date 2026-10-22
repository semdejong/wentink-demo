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
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="relative z-10 -mt-14 max-w-3xl rounded-[1.6rem] border border-line bg-paper/95 p-6 shadow-sm sm:-mt-20 sm:p-8">
            <p className="plant-tag">Werk in beeld</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Werk, gesorteerd op soort</h1>
            <p className="mt-4 max-w-2xl text-aarde">We hebben schitterend werk dat we u graag laten zien. Hieronder staat het per soort: aanleg, onderhoud, renovatie, landschapstuinen, plantencentrum en ontwerp.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {albums.map((album, index) => (
                <li key={album.id}>
                  <a href={`#${album.id}`} className="plant-tag normal-case">
                    {String(index + 1).padStart(2, "0")} {album.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {albums.map((album, index) => (
        <section key={album.id} id={album.id} data-section={album.id} className={index % 2 ? "bg-paper" : ""}>
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
            <p className="text-sm font-bold tracking-[0.16em] text-wentink">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-1 font-serif text-4xl">{album.title}</h2>
            <p className="mt-2 mb-4 max-w-2xl">{album.intro}</p>
            <Lightbox photos={album.photos} />
          </div>
        </section>
      ))}
      <EndCta />
    </>
  );
}
