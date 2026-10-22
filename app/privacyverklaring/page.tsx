import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van Hoveniersbedrijf Wentink in Markelo.",
};

export default function PrivacyPage() {
  return (
    <article data-section="privacy" className="mx-auto max-w-3xl space-y-4 px-5 py-12 sm:px-6">
      <p className="plant-tag">Privacy</p>
      <h1 className="font-serif text-4xl sm:text-5xl">Privacyverklaring</h1>
      <p>
        Hoveniersbedrijf Wentink, gevestigd in Markelo, {site.place}, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
      </p>
      <p>
        Telefoon: <a className="font-bold underline" href={site.phoneTel}>{site.phoneDisplay}</a> / <a className="font-bold underline" href={site.mobileTel}>{site.mobileDisplay}</a>
        <br />
        E-mail: <a className="font-bold underline" href={site.mailto}>{site.email}</a>
      </p>
      <h2 className="pt-4 font-serif text-3xl">Persoonsgegevens die wij verwerken</h2>
      <p>Hoveniersbedrijf Wentink verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Het gaat om:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Voor- en achternaam</li>
        <li>Adresgegevens die u zelf doorgeeft</li>
        <li>Telefoonnummer</li>
        <li>E-mailadres</li>
        <li>Anonieme gegevens over uw bezoek aan deze website</li>
      </ul>
      <p>Onze website heeft niet de intentie gegevens te verzamelen over bezoekers die jonger zijn dan 16 jaar, tenzij zij toestemming hebben van ouders of voogd. Denkt u dat wij zonder die toestemming gegevens van een minderjarige hebben, neem dan contact op via {site.email} of {site.mobileDisplay}. Wij verwijderen die informatie dan.</p>
      <h2 className="pt-4 font-serif text-3xl">Doel</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Het afhandelen van een betaling of het verzenden van een factuur</li>
        <li>U te kunnen bellen of e-mailen wanneer dat nodig is om het werk uit te voeren</li>
        <li>Om goederen en diensten bij u af te leveren</li>
        <li>De website anoniem te verbeteren</li>
        <li>Wettelijke verplichtingen, zoals de administratie voor de belasting</li>
      </ul>
      <p>Wij maken geen gebruik van geautomatiseerde besluitvorming. Wij bewaren gegevens niet langer dan nodig is voor de gevraagde dienst, tenzij de wet een langere bewaartermijn vraagt. Gegevens gaan alleen naar derden als dat nodig is voor de overeenkomst of een wettelijke plicht.</p>
      <h2 className="pt-4 font-serif text-3xl">Cookies</h2>
      <p>Op deze website worden geen advertentiecookies geplaatst. Bezoek wordt anoniem geteld en is niet naar een persoon te herleiden. Gegevens uit een e-mail die u zelf verstuurt, komen bij ons binnen via uw eigen e-mailprogramma.</p>
      <h2 className="pt-4 font-serif text-3xl">Inzien, aanpassen of verwijderen</h2>
      <p>
        U kunt een verzoek tot inzage, correctie, verwijdering of overdracht, of bezwaar tegen de verwerking, sturen naar {site.email}. Wij wijzen u erop dat u een klacht kunt indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.
      </p>
    </article>
  );
}
