import { useId } from "react";

/** Tegelboom + woordmerk, nagebouwd van het origineel (181×86). */
const TREE: Array<[number, number]> = [
  [5, 0], [6, 0], [7, 0],
  [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
  [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2],
  [1, 3], [2, 3], [3, 3], [4, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3],
  [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4],
  [0, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [11, 5],
  [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
  [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7],
  [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8],
  [5, 9], [6, 9], [7, 9],
  [5, 10], [6, 10], [7, 10],
  [4, 11], [5, 11], [6, 11], [7, 11], [8, 11],
  [3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12],
];

const PITCH = 5.4;
const SIZE = 4.15;

export default function Logo({
  variant = "color",
  className = "h-12 w-auto",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const titleId = useId();
  const ink = variant === "white" ? "#F5F2EA" : "#14241C";
  const leaf = variant === "white" ? "#F5F2EA" : "#008357";
  const shade = variant === "white" ? "#E4DDD0" : "#006B48";

  return (
    <svg
      viewBox="0 0 248 78"
      className={className}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>Hoveniersbedrijf Wentink</title>
      <g className="tile-grow">
        {TREE.map(([col, row], i) => (
          <rect
            key={`${col}-${row}`}
            x={2 + col * PITCH}
            y={2 + row * PITCH}
            width={SIZE}
            height={SIZE}
            rx="0.4"
            fill={(col + row) % 5 === 0 ? shade : leaf}
            style={{ animationDelay: `${i * 18}ms` }}
          />
        ))}
      </g>
      <text
        x="78"
        y="30"
        fill={ink}
        style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}
        fontSize="9.2"
        fontWeight="700"
        letterSpacing="1.55"
      >
        HOVENIERSBEDRIJF
      </text>
      <text
        x="76"
        y="54"
        fill={ink}
        style={{ fontFamily: "var(--font-lato), Lato, sans-serif" }}
        fontSize="26"
        textLength="154"
        lengthAdjust="spacingAndGlyphs"
        fontWeight="900"
        letterSpacing="0.4"
      >
        WENTINK
      </text>
      <path d="M76 61.5 H232" stroke={ink} strokeWidth="2.4" fill="none" />
    </svg>
  );
}
