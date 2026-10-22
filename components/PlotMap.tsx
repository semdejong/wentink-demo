const beds = [
  { no: "01", name: "Vaste planten", wide: true },
  { no: "02", name: "Een- en tweejarige planten", wide: true },
  { no: "03", name: "Sierheesters", wide: false },
  { no: "04", name: "Coniferen", note: "haag en sier", wide: false },
  { no: "05", name: "Fruitbomen", wide: false },
  { no: "06", name: "Haag- en bosplantsoen", wide: false },
  { no: "07", name: "Sier- en laanbomen", wide: true },
  { no: "08", name: "Uit voorraad", note: "60 soorten bomen", wide: true },
];

export default function PlotMap() {
  return (
    <ul className="tegel-veld grid grid-cols-2 gap-3 rounded-[1.6rem] p-3 sm:grid-cols-4 sm:p-5">
      {beds.map((bed) => (
        <li key={bed.no} className={`plot flex h-full flex-col ${bed.wide ? "sm:col-span-2" : ""}`}>
          <p className="text-xs font-bold tracking-[0.18em] text-wentink">{bed.no}</p>
          <p className="mt-2 font-serif text-2xl leading-tight">{bed.name}</p>
          {bed.note && <p className="mt-1 text-sm text-aarde">{bed.note}</p>}
        </li>
      ))}
    </ul>
  );
}
