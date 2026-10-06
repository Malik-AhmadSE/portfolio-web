import { projects, site } from "@/content/site";
import LaptopMockup from "./LaptopMockup";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Hero() {
  const [line1, line2] = site.heroTagline;
  const featured = projects[0];
  const words = line2.split(" ");
  const last = words.pop() ?? "";

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-rules pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 md:px-10 md:pt-40">
        {/* Masthead row */}
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:text-[11px]">
          <span>Portfolio — Full-Stack Web</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.availability}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-10 font-display text-[clamp(2.9rem,8vw,6.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
          <span className="hero-line">
            <span>{line1}</span>
          </span>
          <span className="hero-line hero-line-2">
            <span>
              {words.join(" ")}{" "}
              <em className="font-display italic font-medium text-accent">
                {last}
              </em>
            </span>
          </span>
        </h1>

        {/* Intro + figure */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed text-soil">
                {site.heroIntro}
              </p>
              <p className="mt-6 font-mono text-xs text-fog">{site.heroNote}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="/#work" variant="solid">
                  View case studies ↓
                </MagneticButton>
                <MagneticButton
                  href={`https://wa.me/${site.whatsapp}`}
                  variant="outline"
                  external
                >
                  Get in touch
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={150}>
              <figure>
                <LaptopMockup
                  url={featured.liveUrl}
                  src={featured.image}
                  alt={`${featured.name} — live site`}
                />
                <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                  fig. 00 — {featured.name}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <Reveal delay={100} className="mt-20">
          <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {site.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-7 pr-6 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${
                  i % 2 === 1 ? "border-l border-line pl-6 md:pl-8" : ""
                }`}
              >
                <dd className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="h-14 md:h-20" />
    </section>
  );
}
