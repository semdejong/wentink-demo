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
        <div className="strip h-[42vw] min-h-[220px] max-h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} />
        </div>
      )}
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 ${photo ? "pb-10" : "pt-12"}`}>
        <div className={photo ? "relative z-10 -mt-14 max-w-3xl rounded-[1.6rem] border border-line bg-paper/95 p-6 shadow-sm sm:-mt-20 sm:p-8" : "pb-8"}>
          <p className="plant-tag">{kicker}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-aarde">{lede}</p>
        </div>
      </div>
    </section>
  );
}
