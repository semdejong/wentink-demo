import Link from "next/link";
import AfspraakForm from "@/components/AfspraakForm";
import { site } from "@/lib/site";

export default function Close() {
  return (
    <>
      <section id="werken" data-section="werken-bij" className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <p className="plant-tag">Werken bij Wentink</p>
        <h2 className="mt-4 font-serif text-4xl">Wilt u bij ons werken?</h2>
        <p className="mt-3 max-w-2xl">
          Bel of mail ons. We vertellen u graag of er plek is en wat het werk inhoudt. Een vrijblijvend gesprek kan ook op het plantencentrum, tijdens de openingstijden.
        </p>
        <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center rounded-full border border-dennen/20 px-5 font-bold">
          Neem contact op
        </Link>
      </section>
      <section data-section="contact" className="bg-dennen py-16 text-linen">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="plant-tag">Contact</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Afspraak aan huis</h2>
            <p className="mt-4 text-linen/85">Bent u benieuwd wat wij voor u kunnen betekenen? Bel, mail of vraag een vrijblijvende afspraak aan.</p>
            <ul className="mt-6 space-y-2 text-lg">
              <li><a className="font-bold underline underline-offset-4" href={site.phoneTel}>{site.phoneDisplay}</a></li>
              <li><a className="font-bold underline underline-offset-4" href={site.mobileTel}>{site.mobileDisplay}</a></li>
              <li><a className="font-bold underline underline-offset-4" href={site.mailto}>{site.email}</a></li>
            </ul>
            <p className="mt-4 text-linen/75">{site.place}.</p>
          </div>
          <div className="rounded-[1.6rem] bg-linen p-5 text-dennen sm:p-6">
            <AfspraakForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
