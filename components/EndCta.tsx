import Link from "next/link";
import { site } from "@/lib/site";

export default function EndCta({ text }: { text?: string }) {
  return (
    <section data-section="afspraak" className="bg-paper py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-lg">
          {text ?? `Neem gerust contact op voor een vrijblijvende afspraak in ${site.area}. Wij komen graag bij u langs.`}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/afspraak" data-cta="offerte" className="inline-flex min-h-11 items-center justify-center rounded-full bg-wentink px-5 font-bold text-white">
            Afspraak aan huis
          </Link>
          <a href={site.phoneTel} className="inline-flex min-h-11 items-center justify-center rounded-full border border-dennen/20 px-5 font-bold">
            Bel {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
