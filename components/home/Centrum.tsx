import Link from "next/link";
import { shots } from "@/lib/photos";
import { site } from "@/lib/site";

export default function Centrum() {
  return (
    <section data-section="plantencentrum" className="relative overflow-hidden bg-dennen py-16 text-linen">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/textures/leaf-shadow.jpg" alt="" className="pointer-events-none absolute -right-10 top-0 w-[420px] opacity-25 mix-blend-screen" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="plant-tag">Plantencentrum</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Een hovenier met een eigen kwekerij</h2>
          <p className="mt-4 text-linen/85">{site.placeLong}</p>
          <p className="mt-4 text-linen/85">
            Onze specialiteit: een zeer uitgebreide collectie, 60 soorten uit voorraad leverbaar. Sier- en laanbomen, fruitbomen, haag- en bosplantsoen. Op het showterrein ziet u bestrating in echte patronen op de grond.
          </p>
          <p className="mt-4 font-bold">{site.saturday}</p>
          <ul className="mt-4 space-y-1">
            {site.hours.map((row) => (
              <li key={row.label}>
                {row.label}: {row.value}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-linen/75">Een aanhanger stellen wij vrijblijvend beschikbaar als u die zelf niet heeft.</p>
          <Link href="/plantencentrum" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-linen px-5 font-bold text-dennen">
            Bekijk het plantencentrum
          </Link>
        </div>
        <figure className="photo-frame mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shots.bomen.src} alt={shots.bomen.alt} width={900} height={420} className="aspect-[16/9]" />
          <figcaption className="bg-paper px-4 py-3 text-sm font-bold tracking-wide text-dennen uppercase">
            60 soorten bomen uit voorraad
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
