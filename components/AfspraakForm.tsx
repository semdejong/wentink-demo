"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const HELPS = [
  "Tuinontwerp",
  "Tuinaanleg",
  "Tuinrenovatie",
  "Tuinonderhoud / onderhoudscontract",
  "Bestrating",
  "Bomen/beplanting",
];
const PLACES = ["Markelo", "Diepenheim", "Goor", "Delden", "Rijssen", "anders"];
const SIZES = ["klein", "middel", "groot", "weet ik niet"];

const field = "min-h-11 w-full rounded-xl border border-line bg-white px-3 py-2 text-base";

export default function AfspraakForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines: string[] = [];
    const add = (label: string, value: FormDataEntryValue | null) => {
      const text = String(value ?? "").trim();
      if (text) lines.push(`${label}: ${text}`);
    };
    add("Naam", data.get("naam"));
    add("Telefoon", data.get("telefoon"));
    add("E-mail", data.get("email"));
    if (!compact) {
      add("Woonplaats", data.get("woonplaats"));
      const helps = data.getAll("hulp").map(String).filter(Boolean);
      if (helps.length) lines.push(`Waar kunnen wij u mee helpen: ${helps.join(", ")}`);
      add("Omvang van de tuin", data.get("omvang"));
      add("Gewenste periode", data.get("periode"));
      lines.push("Foto's of moodboard: worden apart per e-mail meegestuurd");
    }
    add("Bericht", data.get("bericht"));
    const href = `${site.mailto}?subject=${encodeURIComponent("Vrijblijvende afspraak aan huis")}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <p role="status" className="rounded-2xl border border-line bg-white p-5">
        Uw e-mailprogramma is geopend met de ingevulde gegevens. Verstuur die e-mail om de afspraak aan te vragen. Lukt dat niet, mail dan zelf naar{" "}
        <a className="font-bold underline" href={site.mailto}>{site.email}</a>.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <label className="grid gap-1 text-sm font-bold">
        Naam
        <input name="naam" required autoComplete="name" className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-bold">
          Telefoon
          <input name="telefoon" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="grid gap-1 text-sm font-bold">
          E-mail
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      {!compact && (
        <>
          <label className="grid gap-1 text-sm font-bold">
            Woonplaats
            <select name="woonplaats" className={field} defaultValue="Markelo">
              {PLACES.map((place) => (
                <option key={place}>{place}</option>
              ))}
            </select>
          </label>
          <fieldset className="grid gap-2">
            <legend className="text-sm font-bold">Waar kunnen wij u mee helpen</legend>
            {HELPS.map((item) => (
              <label key={item} className="flex min-h-11 items-center gap-3">
                <input type="checkbox" name="hulp" value={item} className="size-5 accent-wentink" />
                {item}
              </label>
            ))}
          </fieldset>
          <fieldset className="grid gap-2">
            <legend className="text-sm font-bold">Omvang van de tuin</legend>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((size) => (
                <label key={size} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-3">
                  <input type="radio" name="omvang" value={size} />
                  {size}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-1 text-sm font-bold">
            Gewenste periode
            <input name="periode" className={field} />
          </label>
          <p className="rounded-xl bg-white px-3 py-3 text-base">
            Foto&apos;s of een moodboard: stuur ze gerust mee per e-mail naar {site.email}.
          </p>
        </>
      )}
      <label className="grid gap-1 text-sm font-bold">
        Bericht
        <textarea name="bericht" rows={compact ? 4 : 5} className={field} />
      </label>
      <button type="submit" data-cta="offerte" className="min-h-11 rounded-full bg-wentink px-5 font-bold text-white">
        Afspraak aanvragen
      </button>
    </form>
  );
}
