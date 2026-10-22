import Link from "next/link";

const pages = [
  { href: "/diensten/tuinonderhoud", label: "Onderhoud" },
  { href: "/diensten/tuinaanleg", label: "Aanleg" },
  { href: "/diensten/tuinrenovatie", label: "Renovatie" },
  { href: "/diensten/tuinontwerp", label: "Ontwerp" },
  { href: "/plantencentrum", label: "Plantencentrum" },
  { href: "/werk-in-beeld", label: "Werk in beeld" },
];

export default function SiblingNav({ current }: { current: string }) {
  return (
    <nav data-section="verder" aria-label="Meer van Wentink" className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
      <p className="plant-tag">Lees verder</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {pages
          .filter((page) => page.href !== current)
          .map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 font-bold">
                {page.label}
              </Link>
            </li>
          ))}
        <li>
          <Link href="/afspraak" data-cta="offerte" className="inline-flex min-h-11 items-center rounded-full bg-wentink px-4 font-bold text-white">
            Afspraak aan huis
          </Link>
        </li>
      </ul>
    </nav>
  );
}
