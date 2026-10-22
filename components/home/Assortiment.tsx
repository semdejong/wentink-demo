import Link from "next/link";
import PlotMap from "@/components/PlotMap";

export default function Assortiment() {
  return (
    <section data-section="assortiment" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="plant-tag">Kwekerij</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">De vakken van het plantencentrum</h2>
            <p className="mt-4 text-aarde">
              Een hovenier die kweekt en op voorraad heeft wat hij plant. Op 2 hectare, aan de voet van de Friezenberg, met uitzicht richting ‘de Hoch’.
            </p>
            <Link href="/plantencentrum" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-dennen px-5 font-bold text-linen">
              Loop de vakken na
            </Link>
          </div>
          <PlotMap />
        </div>
      </div>
    </section>
  );
}
