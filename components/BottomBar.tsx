import Link from "next/link";
import { site } from "@/lib/site";

/** Vaste balk op de telefoon. De Sleads-badge blijft links zichtbaar. */
export default function BottomBar() {
  return (
    <div data-section="snelkeuze" className="fixed inset-x-0 bottom-14 z-40 px-3 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneTel}
          className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full border border-dennen/15 bg-paper px-2 text-sm font-bold shadow-sm"
        >
          Bel {site.phoneDisplay}
        </a>
        <Link
          href="/afspraak"
          data-cta="offerte"
          className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-wentink px-2 text-sm font-bold text-white shadow-sm"
        >
          Afspraak aan huis
        </Link>
      </div>
    </div>
  );
}
