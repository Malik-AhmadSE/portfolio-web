"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LaptopMockupProps = {
  /** Live site — embedded inside the frame and linked from the chrome bar. */
  url?: string;
  /** Screenshot shown in the frame (full-time when there is no live url). */
  src: string;
  alt: string;
  className?: string;
};

const VIEWPORTS = [
  { id: "desktop", width: "100%", label: "Desktop" },
  { id: "tablet", width: "66%", label: "Tablet" },
] as const;

// The frame is only a few hundred CSS px wide — at that width responsive
// sites show their mobile layout. The embed renders at a true device
// width and is scaled down to fit, like DevTools device mode.
const DESIGN_WIDTHS = { desktop: 1440, tablet: 768 } as const;
const SCREEN_ASPECT = 10 / 16;

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
  const [embedVisible, setEmbedVisible] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [areaWidth, setAreaWidth] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Mount the live iframe only once the frame approaches the viewport —
  // a page can hold several embeds and each is a full web app.
  useEffect(() => {
    const el = screenRef.current;
    if (!el || embedVisible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setEmbedVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [embedVisible]);

  // Track the viewport's rendered width so the embed's scale stays
  // correct across resize and the desktop/tablet width animation.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setAreaWidth((prev) => (Math.abs(prev - width) > 0.5 ? width : prev));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const host = url
    ? (() => {
        try {
          return new URL(url).host;
        } catch {
          return url;
        }
      })()
    : null;

  const current = VIEWPORTS.find((v) => v.id === viewport) ?? VIEWPORTS[0];
  const designWidth = DESIGN_WIDTHS[current.id];
  const designHeight = designWidth * SCREEN_ASPECT;
  const scale = areaWidth > 0 ? areaWidth / designWidth : 0;

  return (
    <div className={`laptop ${className}`}>
      <div className="laptop-screen">
        <div className="laptop-display">
          <span className="laptop-notch" aria-hidden="true" />

          {/* browser chrome — sits below the notch. The middle track is a
              zero-min 1fr so the truncated URL pill never inflates the
              laptop's intrinsic width (it used to blow the page out to
              ~456px on a 390px phone). */}
          <div className="relative z-10 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 bg-[#131316] py-2 pl-3.5 pr-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>

            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="mx-auto flex w-full min-w-0 max-w-[240px] items-center gap-1.5 rounded-full bg-white/[0.09] px-3 py-1 font-mono text-[10px] text-white/80 transition-colors hover:bg-white/[0.16] hover:text-white"
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
            ) : (
              <span className="mx-auto flex w-full min-w-0 max-w-[240px] items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[10px] text-white/55">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-2.5 w-2.5 shrink-0">
                  <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" />
                  <path d="M5.5 7V5.5a2.5 2.5 0 0 1 5 0V7" />
                </svg>
                <span className="truncate">Demo on request</span>
              </span>
            )}

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
          <div className="laptop-screen-area" ref={screenRef}>
            <div className="laptop-viewport" style={{ width: current.width }} ref={viewportRef}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover object-top"
              />
              {url && embedVisible && areaWidth > 0 && (
                <iframe
                  src={url}
                  title={alt}
                  loading="lazy"
                  onLoad={() => setEmbedLoaded(true)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  style={{
                    width: designWidth,
                    height: designHeight,
                    transform: `scale(${scale})`,
                  }}
                  className={`absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-700 motion-reduce:transition-none ${
                    embedLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="laptop-base" aria-hidden="true" />
    </div>
  );
}
