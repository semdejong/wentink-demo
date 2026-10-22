import Link from "next/link";
import { albums } from "@/lib/photos";

export default function Landschap() {
  const photo = albums.find((album) => album.id === "landschapstuinen")!.photos[4];
  return (
    <section data-section="landschap" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 sm:px-6 lg:grid-cols-2">
      <figure className="photo-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} width={900} height={600} className="aspect-[4/3]" />
      </figure>
      <div>
        <p className="plant-tag">Landschapstuinen</p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Tuinen die meedoen met het landschap</h2>
        <p className="mt-4 text-aarde">
          Wentink heeft grotere en kleine tuinen aangelegd die perfect harmoniëren met de omliggende landschappelijke omgeving. Ruime tuinen bij woningen, met jonge bomen, open grond en gazon.
        </p>
        <p className="mt-3">Desgewenst leggen we ook bijzondere tuinen aan. Eerst lopen we samen door de tuin, daarna volgt een ontwerp met een kostenplaatje.</p>
        <Link href="/werk-in-beeld#landschapstuinen" className="mt-6 inline-flex min-h-11 items-center font-bold underline underline-offset-4">
          Bekijk de landschapstuinen
        </Link>
      </div>
    </section>
  );
}
