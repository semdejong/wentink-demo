import Link from "next/link";

const routes = [
  {
    label: "Voor uw tuin",
    title: "Laat uw tuin doen",
    text: "Onderhoud, aanleg, renovatie of een ontwerp. Wij komen vrijblijvend bij u langs, nemen de maten op en lopen samen door de tuin.",
    href: "/afspraak",
    cta: "Vrijblijvende afspraak aan huis",
    offerte: true,
    links: [
      ["Tuinonderhoud", "/diensten/tuinonderhoud"],
      ["Tuinaanleg", "/diensten/tuinaanleg"],
      ["Tuinrenovatie", "/diensten/tuinrenovatie"],
      ["Tuinontwerp", "/diensten/tuinontwerp"],
    ],
  },
  {
    label: "Zelf komen kijken",
    title: "Kom naar het plantencentrum",
    text: "Planten, bomen, bestrating en grond. Aan de voet van de Friezenberg, met 2 hectare kwekerij. De zaterdag is onze infodag.",
    href: "/plantencentrum",
    cta: "Openingstijden en route",
    offerte: false,
    links: [
      ["Plantencentrum", "/plantencentrum"],
      ["Bomen uit voorraad", "/plantencentrum#bomen"],
      ["Bestrating en grond", "/plantencentrum#materialen"],
    ],
  },
] as const;

export default function Routes() {
  return (
    <section data-section="twee-routes" className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
      <div className="klinker mb-8" aria-hidden>
        {Array.from({ length: 8 }, (_, i) => <i key={i} />)}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {routes.map((route) => (
          <article key={route.title} className="flex flex-col rounded-[1.6rem] border border-line bg-paper p-6 sm:p-8">
            <p className="plant-tag">{route.label}</p>
            <h2 className="mt-4 font-serif text-4xl">{route.title}</h2>
            <p className="mt-3 text-aarde">{route.text}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {route.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-11 items-center rounded-full bg-muted px-3 text-sm font-bold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={route.href}
              data-cta={route.offerte ? "offerte" : undefined}
              className="mt-6 inline-flex min-h-11 items-center self-start rounded-full bg-dennen px-5 font-bold text-linen"
            >
              {route.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
