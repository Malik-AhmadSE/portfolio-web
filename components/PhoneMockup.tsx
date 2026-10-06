"use client";

import Image from "next/image";
import { useRef } from "react";

type PhoneMockupProps = {
  src: string;
  alt: string;
  accent: string; // rgb triplet
  className?: string;
};

export default function PhoneMockup({
  src,
  alt,
  accent,
  className = "",
}: PhoneMockupProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * 8}deg) rotateX(${y * -6}deg)`;
  };

  const onLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)";
  };

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
            <div className="phone-screen">
              <span className="phone-island" aria-hidden="true" />
              <Image src={src} alt={alt} fill sizes="200px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
