/** Kwekerijvakken: alleen categorieën die zij zelf noemen. */

const beds = [
  { name: "Vaste planten", wide: true },
  { name: "Een- en tweejarige planten", wide: false },
  { name: "Sierheesters", wide: false },
  { name: "Coniferen", note: "haag en sier", wide: false },
  { name: "Sier- en laanbomen", note: "uit voorraad", wide: true },
  { name: "Fruitbomen", wide: false },
  { name: "Haag- en bosplantsoen", wide: false },
  { name: "60 soorten", note: "bomen uit voorraad leverbaar", wide: true },
];

export default function PlotMap() {
  return (
    <ul className="tegel-veld grid grid-cols-2 gap-3 rounded-[1.6rem] p-3 sm:grid-cols-4 sm:p-4">
      {beds.map((bed) => (
        <li key={bed.name} className={`plot ${bed.wide ? "sm:col-span-2" : ""}`}>
          <p className="text-xs font-bold tracking-[0.16em] text-wentink uppercase">Vak</p>
          <p className="mt-2 font-serif text-2xl leading-tight">{bed.name}</p>
          {bed.note && <p className="mt-1 text-sm text-aarde">{bed.note}</p>}
        </li>
      ))}
    </ul>
  );
}
