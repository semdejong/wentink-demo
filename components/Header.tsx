import Link from "next/link";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-line/80 bg-linen/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="mr-auto shrink-0 rounded-sm" aria-label="Hoveniersbedrijf Wentink, naar home">
          <Logo className="h-11 w-auto sm:h-14" />
        </Link>
        <nav aria-label="Hoofdmenu" className="hidden items-center gap-5 lg:flex">
          {nav.map((item) =>
            "children" in item ? (
              <details key={item.label} className="relative">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1 text-[0.95rem] font-bold marker:content-none">
                  {item.label}
                  <span aria-hidden className="text-xs text-aarde">▾</span>
                </summary>
                <div className="absolute left-0 top-full z-20 mt-2 min-w-52 rounded-2xl border border-line bg-paper p-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block rounded-xl px-3 py-2 text-[0.95rem] hover:bg-muted">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-[0.95rem] font-bold">
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <a href={site.phoneTel} className="hidden text-[0.95rem] font-bold xl:inline">
          {site.phoneDisplay}
        </a>
        <Link
          href="/afspraak"
          data-cta="offerte"
          className="hidden min-h-11 items-center rounded-full bg-wentink px-4 text-[0.95rem] font-bold text-white sm:inline-flex"
        >
          Afspraak aan huis
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
