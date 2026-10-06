import { site } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="text-accent">03</span> / About
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
            {site.location}
          </p>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <p className="dropcap max-w-2xl text-xl leading-[1.9] text-soil md:text-2xl">
              {site.aboutStatement}
            </p>
            <p className="mt-10 font-display text-2xl italic text-ink">
              — {site.name}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
