export default function QuoteBand({
  quote,
  name,
  section = "citaat",
}: {
  quote: string;
  name: string;
  section?: string;
}) {
  return (
    <section data-section={section} className="bg-dennen py-14 text-linen">
      <figure className="mx-auto max-w-4xl px-5 sm:px-6">
        <blockquote>
          <p className="font-serif text-3xl italic leading-snug sm:text-4xl">“{quote}”</p>
        </blockquote>
        <figcaption className="mt-6 text-sm font-bold tracking-[0.16em] uppercase text-linen/75">{name}</figcaption>
      </figure>
    </section>
  );
}
