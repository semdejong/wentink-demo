import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import { albums, shots } from "@/lib/photos";
import { processSteps } from "@/lib/copy";

export default function Work() {
  const strip = albums.map((album) => album.photos[0]);

  return (
    <>
      <section data-section="werk-in-beeld" className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="plant-tag">Werk in beeld</p>
            <h2 className="mt-4 font-serif text-4xl">Ons werk, per soort tuin</h2>
          </div>
          <Link href="/werk-in-beeld" className="inline-flex min-h-11 items-center font-bold underline underline-offset-4">
            Bekijk al ons werk
          </Link>
        </div>
        <Lightbox photos={strip} />
      </section>
      <section data-section="van-schets-tot-tuin" className="relative bg-paper py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="plant-tag">Werkwijze</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Van schets tot tuin</h2>
            <p className="mt-4 text-aarde">
              Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging. Daarna ziet u of uw ideale tuin binnen het budget past.
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <li key={step.label} className="rounded-2xl border border-line bg-linen p-4">
                  <span className="text-sm font-bold tracking-widest text-wentink">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-2xl">{step.label}</h3>
                  <p className="text-base text-aarde">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <figure className="photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shots.ontwerp.src} alt={shots.ontwerp.alt} width={900} height={700} />
          </figure>
        </div>
      </section>
    </>
  );
}
