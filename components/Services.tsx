import { services } from "@/content/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="text-accent">02</span> / What I do
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Four ways we can work together.
          </h2>
        </div>

        <div className="mt-16 border-t border-line">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 60}>
              <div className="group grid gap-4 border-b border-line py-10 transition-colors duration-300 hover:bg-cream md:grid-cols-12 md:gap-8 md:px-4">
                <p className="font-mono text-xs tracking-[0.2em] text-accent md:col-span-2">
                  {service.num}
                </p>
                <h3 className="font-display text-3xl font-semibold tracking-tight md:col-span-5">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-soil md:col-span-5">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
