import Link from "next/link";
import { albums, shots } from "@/lib/photos";

const items = [
  {
    title: "Onderhoud",
    href: "/diensten/tuinonderhoud",
    text: "Uw tuin het gehele jaar op haar mooist. Van wekelijks onderhoud tot een jaarlijkse grote beurt, met een contract naar uw wens.",
    photo: albums[1].photos[1],
  },
  {
    title: "Aanleg",
    href: "/diensten/tuinaanleg",
    text: "Grotere en kleine tuinen die perfect harmoniëren met de omliggende landschappelijke omgeving. Desgewenst ook bijzondere tuinen.",
    photo: albums[0].photos[4],
  },
  {
    title: "Renovatie",
    href: "/diensten/tuinrenovatie",
    text: "Een slecht gazon, een verzakte oprit of verwilderde beplanting. We behouden de goede elementen en verbeteren waar nodig.",
    photo: shots.renovatieHeader,
  },
  {
    title: "Tuinarchitectuur",
    href: "/diensten/tuinontwerp",
    text: "Ook voor groen advies staan wij voor u klaar. Samen met de doe-het-zelver maken we een ontwerp dat u, indien gewenst met hulp, zelf aanlegt.",
    photo: shots.ontwerp,
  },
];

export default function Services() {
  return (
    <section data-section="diensten" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="plant-tag">Onze diensten</p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">Onderhoud, aanleg, renovatie en ontwerp</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <article key={item.href} className={index % 2 ? "md:mt-12" : ""}>
              <Link href={item.href} className="group block">
                <figure className="photo-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.photo.src} alt={item.photo.alt} width={900} height={560} className="aspect-[16/10]" />
                </figure>
                <h3 className="mt-4 font-serif text-3xl group-hover:underline">{item.title}</h3>
              </Link>
              <p className="mt-2 text-aarde">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
