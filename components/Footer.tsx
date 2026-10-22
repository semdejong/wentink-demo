import Link from "next/link";
import Logo from "@/components/Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-section="footer" className="bg-dennen text-linen">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="white" className="h-14 w-auto" />
          <p className="mt-4 font-serif text-2xl italic text-linen">{site.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-linen/80">{site.place}</p>
        </div>
        <div>
          <p className="plant-tag">Diensten</p>
          <ul className="mt-4 space-y-2 text-[1.02rem]">
            {nav[0].children.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="plant-tag">Plantencentrum</p>
          <ul className="mt-4 space-y-1.5 text-[1.02rem]">
            {site.hours.map((row) => (
              <li key={row.label} className="border-b border-white/10 py-1.5">
                <span className="block text-linen/75">{row.label}</span>
                <span className="font-bold">{row.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-linen/80">{site.saturday}</p>
        </div>
        <div>
          <img src="/tuinkeur-logo.jpg" alt="Tuinkeur gecertificeerd" width={72} height={72} className="rounded-md bg-white p-1" />
          <ul className="mt-4 space-y-2 text-[1.02rem]">
            <li>
              <a href={site.facebook} className="underline-offset-4 hover:underline">Facebook</a>
            </li>
            <li>
              <Link href="/privacyverklaring" className="underline-offset-4 hover:underline">Privacyverklaring</Link>
            </li>
            <li>
              <a href={site.voorwaarden} className="underline-offset-4 hover:underline">Algemene voorwaarden</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 pb-16 pt-4 text-sm text-linen/70 sm:px-6">
          © {site.name}. {site.since}.
        </p>
      </div>
    </footer>
  );
}
