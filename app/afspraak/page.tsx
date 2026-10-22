import type { Metadata } from "next";
import AfspraakForm from "@/components/AfspraakForm";
import { faq, processSteps } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vrijblijvende afspraak aan huis",
  description: "Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging.",
};

export default function AfspraakPage() {
  return (
    <>
      <section data-section="pagina-hero" className="mx-auto max-w-3xl px-5 py-12 sm:px-6">
        <p className="plant-tag">Afspraak</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-6xl">Wij komen graag bij u langs</h1>
        <p className="mt-4 text-xl">Wij komen bij u langs om uw tuin te bekijken, nemen de maten op en bekijken de ligging.</p>
      </section>
      <section data-section="bezoek" className="mx-auto max-w-6xl px-5 pb-8 sm:px-6">
        <h2 className="font-serif text-3xl">Wat er tijdens het bezoek gebeurt</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.label} className="rounded-2xl border border-line bg-paper p-4">
              <h3 className="font-serif text-2xl">{step.label}</h3>
              <p className="text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section data-section="resultaat" className="mx-auto grid max-w-6xl gap-6 px-5 py-6 sm:px-6 md:grid-cols-2">
        <article className="rounded-[1.4rem] bg-paper p-5">
          <h2 className="font-serif text-3xl">Wat u ontvangt</h2>
          <p className="mt-3">Waardevolle adviezen, zodat uw tuin een praktische leefbare tuin wordt. Een tuinontwerp inclusief kostenplaatje, of een offerte voor onderhoud. Bij renovatie krijgt u vooraf inzage in resultaat en budget, desgewenst met een tuinschets.</p>
        </article>
        <article className="rounded-[1.4rem] bg-muted p-5">
          <h2 className="font-serif text-3xl">Zo bereidt u zich voor</h2>
          <p className="mt-3">Maak een moodboard. Verzamel afbeeldingen van de sfeer, materialen en meubels die u mooi vindt, en breng ze bij elkaar. Zo ziet u of alles in dezelfde stijl is. Foto&apos;s sturen we graag mee: doe dat per e-mail.</p>
        </article>
      </section>
      <section data-section="moodboard" className="bg-paper py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="plant-tag">Moodboard</p>
            <h2 className="mt-4 font-serif text-4xl">Drie stappen voor u begint</h2>
            <ol className="mt-4 space-y-3">
              <li><span className="font-bold">1. </span>Bedenk welke sfeer de tuin moet hebben, en of u in de zon wilt zitten of liever in de schaduw leest.</li>
              <li><span className="font-bold">2. </span>Verzamel beelden van stijl, materialen en meubels, uit een magazine of online.</li>
              <li><span className="font-bold">3. </span>Leg ze bij elkaar. Zo ziet u of alles bij elkaar past, en voorkomt u dat de tuin een manusje van alles wordt.</li>
            </ol>
          </div>
          <div>
            <p className="plant-tag">Werkgebied</p>
            <h2 className="mt-4 font-serif text-4xl">Waar we langskomen</h2>
            <p className="mt-3">Wij komen graag bij u langs in {site.area}.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.places.map((place) => (
                <li key={place} className="plant-tag normal-case tracking-normal">{place}</li>
              ))}
              <li className="plant-tag normal-case tracking-normal">Omliggende plaatsen</li>
            </ul>
          </div>
        </div>
      </section>
      <section data-section="formulier" className="mx-auto max-w-3xl px-5 py-6 sm:px-6">
        <h2 className="mb-4 font-serif text-3xl">Vraag de afspraak aan</h2>
        <AfspraakForm />
      </section>
      <section data-section="faq" className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        <h2 className="font-serif text-3xl">Vragen</h2>
        <div className="mt-4 divide-y divide-line">
          {faq.map((item) => (
            <details key={item.q} className="py-3">
              <summary className="cursor-pointer min-h-11 py-2 font-bold">{item.q}</summary>
              <p className="pb-2">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
