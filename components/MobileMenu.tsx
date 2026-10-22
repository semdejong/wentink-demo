"use client";

import Link from "next/link";
import { useState } from "react";
import { menuPages } from "@/lib/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-dennen/15"
        aria-expanded={open}
        aria-controls="mobiel-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
        <span aria-hidden className="flex w-5 flex-col gap-1.5">
          <span className="h-0.5 w-5 bg-dennen" />
          <span className="h-0.5 w-5 bg-dennen" />
          <span className="h-0.5 w-4 bg-dennen" />
        </span>
      </button>
      <nav
        id="mobiel-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 max-h-[70vh] overflow-y-auto border-b border-line bg-linen px-5 py-4 shadow-lg"
      >
        <ul className="flex flex-col">
          {menuPages.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block min-h-11 py-2.5 text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
