import type { Photo } from "@/lib/photos";

export default function PageHero({
  kicker,
  title,
  lede,
  photo,
}: {
  kicker: string;
  title: string;
  lede: string;
  photo?: Photo;
}) {
  return (
    <section data-section="pagina-hero">
      {photo && (
        <div className="strip h-[38vw] min-h-[200px] max-h-[380px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} />
        </div>
      )}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <p className="plant-tag">{kicker}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-aarde">{lede}</p>
      </div>
    </section>
  );
}
