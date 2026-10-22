import { testimonials, tuinkeur } from "@/lib/copy";
import { site } from "@/lib/site";

export default function Trust() {
  return (
    <section data-section="ervaringen" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="plant-tag">Ervaringen</p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Wat klanten zeggen</h2>
        <p className="mt-4 max-w-2xl">
          <a href={site.rating.href} className="font-bold underline underline-offset-4">
            {site.rating.source}
          </a>
          : {site.rating.score} uit {site.rating.count}.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure key={item.name} className={`flex h-full flex-col rounded-[1.4rem] border border-line bg-linen p-5 ${index === testimonials.length - 1 ? "lg:col-span-2" : ""}`}>
              <blockquote>
                <p>{item.text}</p>
              </blockquote>
              <figcaption className="mt-auto pt-4 text-sm font-bold tracking-wide uppercase">{item.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 grid items-center gap-6 rounded-[1.6rem] border border-line bg-linen p-6 sm:grid-cols-[auto_1fr]">
          <img src="/tuinkeur-logo.jpg" alt="Logo Tuinkeur gecertificeerd" width={96} height={96} className="rounded-md bg-white p-1" />
          <div>
            <h3 className="font-serif text-3xl">Tuinkeur gecertificeerd</h3>
            <p className="mt-2">Wij zijn Tuinkeur gecertificeerd. Dit houdt voor u in dat u zaken doet met een bedrijf die:</p>
            <ul className="mt-3 grid gap-1 sm:grid-cols-2">
              {tuinkeur.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
