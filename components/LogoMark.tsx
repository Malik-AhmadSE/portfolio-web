export default function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      {/* ink tile */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="#1a1712"
        stroke="#f7f5ef"
        strokeOpacity="0.18"
        strokeWidth="2"
      />
      {/* monogram */}
      <g stroke="#f7f5ef" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 46 L23 18 L32 46" />
        <path d="M17.4 35.5 H28.6" />
        <path d="M34 46 L43 18 L52 46" />
        <path d="M37.4 35.5 H48.6" />
      </g>
      {/* accent period */}
      <circle cx="56.5" cy="42" r="3.2" fill="#e8490f" />
    </svg>
  );
}
