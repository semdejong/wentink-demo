"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

export default function Lightbox({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const current = open ? photos[index] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (event.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, photos.length]);

  return (
    <>
      <ul className="flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
        {photos.map((photo, i) => (
          <li key={photo.src + photo.alt} className="w-[min(78vw,420px)] shrink-0 snap-start md:w-auto">
            <button type="button" className="photo-frame block w-full text-left" onClick={() => setIndex(i)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} width={640} height={420} className="aspect-[4/3]" />
            </button>
          </li>
        ))}
      </ul>
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-dennen/88 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button type="button" className="absolute left-4 top-4 min-h-11 rounded-full bg-paper px-4 font-bold" onClick={() => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))}>
            Vorige
          </button>
          <button
            ref={closeRef}
            type="button"
            className="absolute right-4 top-4 min-h-11 rounded-full bg-paper px-4 font-bold"
            onClick={() => setIndex(null)}
          >
            Sluiten
          </button>
          <button type="button" className="absolute bottom-4 right-4 min-h-11 rounded-full bg-paper px-4 font-bold" onClick={() => setIndex((i) => (i === null ? i : (i + 1) % photos.length))}>
            Volgende
          </button>
          <figure className="photo-frame max-h-[82vh] w-full max-w-[900px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} className="max-h-[82vh] object-contain" />
          </figure>
        </div>
      )}
    </>
  );
}
