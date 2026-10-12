"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PhoneMockupProps = {
  /** Live site — embedded inside the screen at mobile design width. */
  url?: string;
  /** Screenshot shown in the frame (full-time when there is no live url). */
  src: string;
  alt: string;
  accent: string; // rgb triplet
  className?: string;
};

// Same trick as the laptop: render the embed at a true mobile device
// width (390px) and scale it down to the frame like DevTools device mode.
const DESIGN_WIDTH = 390;
const SCREEN_ASPECT = 19.5 / 9; // matches .phone-screen in globals.css
// iOS status band: site content starts below it, so the island never
// collides with a live site's own header.
const STATUS_H = 54;

function StatusBar() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 z-[2] flex items-center justify-between bg-black pl-[7cqi] pr-[6cqi]"
      style={{ height: "12.4cqi" }}
    >
      <span
        className="font-sans font-semibold text-white"
        style={{ fontSize: "3.6cqi", letterSpacing: "0.02em" }}
      >
        9:41
      </span>
      <span className="flex items-center" style={{ gap: "1.3cqi" }}>
        <svg
          viewBox="0 0 18 12"
          fill="white"
          style={{ width: "4.6cqi", height: "3.1cqi", display: "block" }}
        >
          <rect x="0" y="7.5" width="3" height="4.5" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg
          viewBox="0 0 16 12"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ width: "4.2cqi", height: "3.2cqi", display: "block" }}
        >
          <path d="M1.6 4.6a9.4 9.4 0 0 1 12.8 0" />
          <path d="M4 7.3a5.7 5.7 0 0 1 8 0" />
          <path d="M6.4 9.9a2.3 2.3 0 0 1 3.2 0" />
        </svg>
        <svg
          viewBox="0 0 25 12"
          style={{ width: "6.9cqi", height: "3.4cqi", display: "block" }}
        >
          <rect
            x="0.75"
            y="0.75"
            width="20.5"
            height="10.5"
            rx="3.2"
            fill="none"
            stroke="white"
            strokeOpacity="0.5"
            strokeWidth="1.2"
          />
          <rect x="2.6" y="2.6" width="14" height="6.8" rx="1.8" fill="white" />
          <path
            d="M23 4v4a2.2 2.2 0 0 0 0-4Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </span>
    </div>
  );
}

export default function PhoneMockup({
  url,
  src,
  alt,
  accent,
  className = "",
}: PhoneMockupProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [embedVisible, setEmbedVisible] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [areaWidth, setAreaWidth] = useState(0);

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

  // ResizeObserver contentRect is pre-transform, so the tilt-on-hover
  // transform on the frame never skews the measured width.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setAreaWidth((prev) => (Math.abs(prev - width) > 0.5 ? width : prev));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * 4}deg) rotateX(${y * -3}deg)`;
  };

  const onLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)";
  };

  const designHeight = DESIGN_WIDTH * SCREEN_ASPECT;
  const scale = areaWidth > 0 ? areaWidth / DESIGN_WIDTH : 0;

  return (
    <div className={`group relative ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* soft accent halo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full blur-3xl transition-opacity duration-500"
        style={{ background: `rgb(${accent} / 0.16)` }}
      />

      <div
        ref={frameRef}
        className="phone-wrap mx-auto w-full transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="phone">
          <span className="phone-btn phone-btn--power" aria-hidden="true" />
          <span className="phone-btn phone-btn--vol-up" aria-hidden="true" />
          <span className="phone-btn phone-btn--vol-dn" aria-hidden="true" />

          <div className="phone-bezel">
            <div className="phone-screen" ref={screenRef}>
              <span className="phone-island" aria-hidden="true" />
              <StatusBar />
              <div
                className="absolute inset-x-0 bottom-0"
                style={{ top: STATUS_H * scale }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="200px"
                  className={`object-cover object-top transition-opacity duration-700 motion-reduce:transition-none ${
                    url && embedLoaded ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              {url && embedVisible && areaWidth > 0 && (
                <iframe
                  src={url}
                  title={alt}
                  loading="lazy"
                  onLoad={() => setEmbedLoaded(true)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  style={{
                    top: STATUS_H * scale,
                    width: DESIGN_WIDTH,
                    height: designHeight,
                    transform: `scale(${scale})`,
                  }}
                  className={`absolute left-0 origin-top-left border-0 transition-opacity duration-700 motion-reduce:transition-none ${
                    embedLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
