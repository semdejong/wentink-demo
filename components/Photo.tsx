import type { Photo as PhotoType } from "@/lib/photos";

export default function Photo({
  photo,
  className = "",
  sizes = "frame",
}: {
  photo: PhotoType;
  className?: string;
  sizes?: "frame" | "strip";
}) {
  if (sizes === "strip") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={photo.src} alt={photo.alt} className={className} />
    );
  }

  return (
    <figure className={`photo-frame ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} width={900} height={600} />
    </figure>
  );
}
