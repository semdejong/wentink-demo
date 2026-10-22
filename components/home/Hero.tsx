import Link from "next/link";
import { shots } from "@/lib/photos";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section data-section="hero">
      <div className="strip h-[46vw] min-h-[240px] max-h-[460px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shots.hero.src} alt={shots.hero.alt} />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative z-10 -mt-16 max-w-2xl rounded-[1.6rem] border border-line bg-paper/95 p-6 shadow-sm sm:-mt-24 sm:p-9">
          <p className="font-serif text-4xl italic text-dennen sm:text-6xl">{site.tagline}</p>
          <p className="mt-3 text-xl">{site.since}</p>
          <p className="mt-3 max-w-xl text-aarde">{site.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/afspraak" data-cta="offerte" className="inline-flex min-h-11 items-center justify-center rounded-full bg-wentink px-5 font-bold text-white">
              Vrijblijvende afspraak aan huis
            </Link>
            <a href={site.phoneTel} className="inline-flex min-h-11 items-center justify-center rounded-full border border-dennen/20 px-5 font-bold">
              Bel {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
