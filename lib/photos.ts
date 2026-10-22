export type Photo = { src: string; alt: string };

export const shots = {
  hero: {
    src: "/fotos/headers/frontpage-header-1.jpg",
    alt: "Formele buxustuin met geschoren kegels, bollen en klinkerpaden op het plantencentrum",
  },
  aanlegHeader: {
    src: "/fotos/headers/onzediensten-aanleg-header.jpg",
    alt: "Tuinaanleg: minigraver, aanhanger en het planten van een boom",
  },
  onderhoudHeader: {
    src: "/fotos/headers/onzediensten-onderhoud-header.jpg",
    alt: "Tuinonderhoud tussen jonge bomen, met herfstblad op de grond",
  },
  renovatieHeader: {
    src: "/fotos/headers/onzediensten-renovatie-header.jpg",
    alt: "Border met een natuurstenen watermuur, conifeer en lage beplanting",
  },
  centrumHeader: {
    src: "/fotos/headers/onzediensten-plantencentrum-header.jpg",
    alt: "Overzicht van het plantencentrum met bomen, coniferen en vaste planten in pot",
  },
  bomen: {
    src: "/fotos/headers/werk-in-beeld-header.jpg",
    alt: "Rijen laanbomen op de kwekerij, met jonge stammen en volle kruinen",
  },
  ontwerp: {
    src: "/fotos/ontwerp/ontwerp-voorbeeld-01.jpg",
    alt: "Handgetekend tuinontwerp met gazon, terrassen, split en borders",
  },
  ontwerpTuin: {
    src: "/fotos/ontwerp/ontwerp-voorbeeld-03.jpg",
    alt: "Handgetekend ontwerp van een stadstuin met borders, gazon en een overkapping",
  },
} as const;

export const albums: { id: string; title: string; intro: string; photos: Photo[] }[] = [
  {
    id: "aanleg",
    title: "Aanleg",
    intro: "Grotere en kleine tuinen, van bestrating tot overkapping.",
    photos: [
      { src: "/fotos/aanleg/aanleg-01.jpg", alt: "Klinkers in keperverband leggen bij een schuur tijdens de tuinaanleg" },
      { src: "/fotos/aanleg/aanleg-voorbeeld-05.jpg", alt: "Grote tegels leggen in een zandbed tijdens de tuinaanleg" },
      { src: "/fotos/aanleg/aanleg-09.jpg", alt: "Natuurstenen watermuur met conifeer, split en lage beplanting" },
      { src: "/fotos/aanleg/aanleg-19.jpg", alt: "Houten overkapping met glazen puien, loungebank en grote tegels" },
      { src: "/fotos/aanleg/aanleg-voorbeeld-01.jpg", alt: "Aangelegd gazon met een ronde border en een solitaire boom bij de woning" },
    ],
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    intro: "Maaien, snoeien, blad ruimen en planten, het hele jaar.",
    photos: [
      { src: "/fotos/onderhoud/onderhoud-05.jpg", alt: "Groot gazon maaien met een zitmaaier tijdens het tuinonderhoud" },
      { src: "/fotos/onderhoud/onderhoud-12.jpg", alt: "Een geschoren haag bijknippen in een bloeiende tuin" },
      { src: "/fotos/onderhoud/onderhoud-08.jpg", alt: "Boom met kluit planten in een bestaande tuin" },
      { src: "/fotos/onderhoud/onderhoud-01.jpg", alt: "Tuin met houten schutting, terras van klinkers en potten met violen" },
      { src: "/fotos/headers/onzediensten-onderhoud-header.jpg", alt: "Blad ruimen en de grond bijwerken tussen jonge bomen" },
    ],
  },
  {
    id: "renovatie",
    title: "Renovatie",
    intro: "Goede elementen behouden, en verbeteren waar de tuin dat nodig heeft.",
    photos: [
      { src: "/fotos/renovatie/renovatie-01.jpg", alt: "Nieuw ingezaaid gazon na grondwerk, met een schuur en bomen erachter" },
      { src: "/fotos/renovatie/renovatie-04.jpg", alt: "Grond frezen voor een nieuw gazon, tussen bestaande bomen en een haag" },
      { src: "/fotos/renovatie/renovatie-07.jpg", alt: "Houten schutting plaatsen langs een bestaand terras en gazon" },
      { src: "/fotos/headers/onzediensten-renovatie-header.jpg", alt: "Vernieuwde border met watermuur, stenen en vaste planten" },
    ],
  },
  {
    id: "landschapstuinen",
    title: "Landschapstuinen",
    intro: "Ruime tuinen bij woningen in het landschap.",
    photos: [
      { src: "/fotos/landschapstuinen/landschapstuinen-01.jpg", alt: "Jonge bomen planten bij een woning, met een trekker en open grond" },
      { src: "/fotos/landschapstuinen/landschapstuinen-04.jpg", alt: "Grondwerk en pas geplante bomen bij een woning met rode pannen" },
      { src: "/fotos/landschapstuinen/landschapstuinen-03.jpg", alt: "Boom planten met minigraver en trekker bij een woning in het landschap" },
      { src: "/fotos/landschapstuinen/landschapstuinen-06.jpg", alt: "Heesters planten in een ruim gazon, met jonge bomen op stokken" },
    ],
  },
  {
    id: "plantencentrum",
    title: "Plantencentrum",
    intro: "Eigen plantencentrum en kwekerij: planten, bomen en grond.",
    photos: [
      { src: "/fotos/headers/onzediensten-plantencentrum-header.jpg", alt: "Plantencentrum met rijen potten, coniferen en een kas op de achtergrond" },
      { src: "/fotos/plantencentrum/plantencentrum-pagina-03.jpg", alt: "Vaste planten, bloeiende heesters en jonge bomen in rijen" },
      { src: "/fotos/plantencentrum/plantencentrum-12.jpg", alt: "Heesters en bomen in pot op de kwekerij, onder een open loods" },
      { src: "/fotos/plantencentrum/plantencentrum-08.jpg", alt: "Verrijdbare rekken met vaste planten op het plantencentrum" },
      { src: "/fotos/plantencentrum/plantencentrum-pagina-01.jpg", alt: "Vakken met grind en zand op het plantencentrum" },
      { src: "/fotos/plantencentrum/plantencentrum-pagina-05.jpg", alt: "Losse grond in vakken, met een aanhanger op het plantencentrum" },
      { src: "/fotos/headers/werk-in-beeld-header.jpg", alt: "Laanbomen in rechte rijen op de kwekerij" },
    ],
  },
  {
    id: "ontwerp",
    title: "Ontwerp",
    intro: "Handgetekende tuinontwerpen, na een rondgang door uw tuin.",
    photos: [
      { src: "/fotos/ontwerp/ontwerp-voorbeeld-01.jpg", alt: "Handgetekende plattegrond met gazon, houten terras, split en borders" },
      { src: "/fotos/ontwerp/ontwerp-voorbeeld-03.jpg", alt: "Handgetekend ontwerp met borders, gazonvakken en een overkapping" },
    ],
  },
];
