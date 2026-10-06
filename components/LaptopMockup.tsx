"use client";

import Image from "next/image";
import { useState } from "react";

type LaptopMockupProps = {
  /** Used for the chrome-bar link (opens the site in a new tab). */
  url: string;
  src: string;
  alt: string;
  className?: string;
};

const VIEWPORTS = [
  { id: "desktop", width: "100%", label: "Desktop" },
  { id: "tablet", width: "66%", label: "Tablet" },
] as const;

function MonitorIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-3 w-3">
      <rect x="1.5" y="2.5" width="13" height="9" rx="1" />
      <path d="M6 14h4M8 11.5V14" />
    </svg>
  );
}

function TabletIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-3 w-3">
      <rect x="3.5" y="1.5" width="9" height="13" rx="1.4" />
      <circle cx="8" cy="12.4" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function LaptopMockup({
  url,
  src,
  alt,
  className = "",
}: LaptopMockupProps) {
  const [viewport, setViewport] = useState<(typeof VIEWPORTS)[number]["id"]>("desktop");

  const host = (() => {
    try {
      return new URL(url).host;
    } catch {
      return url;
    }
  })();

  const current = VIEWPORTS.find((v) => v.id === viewport) ?? VIEWPORTS[0];

  return (
    <div className={`laptop ${className}`}>
      <div className="laptop-screen">
        <div className="laptop-display">
          <span className="laptop-notch" aria-hidden="true" />

          {/* browser chrome — sits below the notch */}
          <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-2 bg-[#131316] py-2 pl-3.5 pr-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>

            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="flex max-w-[240px] items-center gap-1.5 rounded-full bg-white/[0.09] px-3 py-1 font-mono text-[10px] text-white/80 transition-colors hover:bg-white/[0.16] hover:text-white"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-2.5 w-2.5 shrink-0">
                <rect x="3" y="7" width="10" height="7" rx="1.4" />
                <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
              </svg>
              <span className="truncate">{host}</span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-2.5 w-2.5 shrink-0 opacity-60">
                <path d="M4.5 11.5 11 5M6 4.8h5.2V10" />
              </svg>
            </a>

            <div className="flex items-center justify-end gap-1">
              {VIEWPORTS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  aria-pressed={viewport === v.id}
                  aria-label={`${v.label} viewport`}
                  title={`${v.label} viewport`}
                  onClick={() => setViewport(v.id)}
                  className={`flex h-6 w-7 items-center justify-center rounded-md transition-colors ${
                    viewport === v.id
                      ? "bg-white/[0.16] text-white"
                      : "text-white/45 hover:bg-white/[0.08] hover:text-white/80"
                  }`}
                >
                  {v.id === "desktop" ? <MonitorIcon /> : <TabletIcon />}
                </button>
              ))}
            </div>
          </div>

          {/* screen area */}
          <div className="laptop-screen-area">
            <div className="laptop-viewport" style={{ width: current.width }}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="laptop-base" aria-hidden="true" />
    </div>
  );
}
