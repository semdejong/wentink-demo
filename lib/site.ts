export const site = {
  slug: "wentink-demo",
  name: "Hoveniersbedrijf Wentink",
  tagline: "Creatief in groen!",
  since: "Al sinds 1986 dé hovenier in de Hof van Twente",
  intro:
    "Hoveniersbedrijf Wentink is al sinds 1986 dé hovenier in de Hof van Twente; een verbluffend team met een verrassend resultaat!",
  kijkje:
    "Neem een kijkje in de groene wereld van onze hoveniers. Maar ook Wentink's plantencentrum is zeker de moeite waard. Deze geeft veel bekijks en biedt tal van ideeën!",
  place: "tussen Markelo en Rijssen, aan de voet van de Friezenberg",
  placeLong:
    "Richting Rijssen ligt links van de weg, aan de voet van de Friezenberg enigszins verscholen het hoveniersbedrijf en plantencentrum, met aanliggend 2 hectare kwekerij. Dit rustgevende en natuurlijk gelegen stukje Markelo biedt een prachtig uitzicht richting ‘de Hoch’.",
  phoneDisplay: "0547-362825",
  phoneTel: "tel:+31547362825",
  mobileDisplay: "06-55336074",
  mobileTel: "tel:+31655336074",
  email: "info@hoveniersbedrijf-wentink.nl",
  mailto: "mailto:info@hoveniersbedrijf-wentink.nl",
  facebook: "https://www.facebook.com/HoveniersbedrijfWentink",
  voorwaarden: "https://www.hoveniersbedrijf-wentink.nl/algemene-voorwaarden.pdf",
  rating: {
    score: "9,2",
    count: "37 beoordelingen",
    source: "HovenierNederland",
    href: "https://hoveniernederland.nl/hovenier/provincies/overijssel/markelo/hoveniersbedrijf-wentink/",
  },
  hours: [
    { label: "Maandag t/m vrijdag", value: "08:15 – 17:30" },
    { label: "Zaterdag", value: "09:00 – 16:00" },
    { label: "Zon- en feestdagen", value: "gesloten" },
  ],
  saturday: "De zaterdag hebben wij speciaal bedoeld als infodag.",
  area: "de Hof van Twente; Diepenheim, Markelo, Goor, Delden en alle omliggende plaatsen",
  places: ["Markelo", "Diepenheim", "Goor", "Delden"],
} as const;

export const nav = [
  {
    label: "Diensten",
    href: "/diensten/tuinonderhoud",
    children: [
      { label: "Tuinonderhoud", href: "/diensten/tuinonderhoud" },
      { label: "Tuinaanleg", href: "/diensten/tuinaanleg" },
      { label: "Tuinrenovatie", href: "/diensten/tuinrenovatie" },
      { label: "Tuinontwerp", href: "/diensten/tuinontwerp" },
    ],
  },
  { label: "Plantencentrum", href: "/plantencentrum" },
  { label: "Werk in beeld", href: "/werk-in-beeld" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
] as const;

/** Alle pagina's, voor het mobiele menu. */
export const menuPages = [
  { label: "Home", href: "/" },
  { label: "Tuinonderhoud", href: "/diensten/tuinonderhoud" },
  { label: "Tuinaanleg", href: "/diensten/tuinaanleg" },
  { label: "Tuinrenovatie", href: "/diensten/tuinrenovatie" },
  { label: "Tuinontwerp", href: "/diensten/tuinontwerp" },
  { label: "Plantencentrum", href: "/plantencentrum" },
  { label: "Werk in beeld", href: "/werk-in-beeld" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Afspraak aan huis", href: "/afspraak" },
  { label: "Contact", href: "/contact" },
] as const;

export const routes = [
  {
    from: "Vanuit Markelo",
    text: "Komende van Markelo verlaat u de bebouwde kom richting Rijssen. Na het pompstation vindt u na ongeveer 400 meter aan uw linkerhand de ingang van ons tuincentrum.",
  },
  {
    from: "Vanuit Rijssen",
    text: "Vanuit Rijssen neemt u de weg richting Goor / Markelo. Bij de splitsing Rijssen / Goor / Markelo / Friezenberg neemt u de afslag richting Markelo. Na ongeveer twee kilometer vindt u rechts van de weg ons tuincentrum.",
  },
  {
    from: "Vanuit Goor",
    text: "Vanuit Goor neemt u de weg richting Markelo. Even buiten de bebouwde kom neemt u de weg richting Rijssen. Bij de splitsing Rijssen / Goor / Markelo / Friezenberg neemt u de afslag richting Markelo en na ongeveer twee kilometer vindt u rechts van de weg ons tuincentrum.",
  },
] as const;

export const seo = {
  title: "Hoveniersbedrijf Wentink | Hovenier in Markelo en de Hof van Twente",
  description:
    "Al sinds 1986 dé hovenier in de Hof van Twente. Tuinaanleg, onderhoud, renovatie en ontwerp, plus een eigen plantencentrum aan de voet van de Friezenberg.",
};
