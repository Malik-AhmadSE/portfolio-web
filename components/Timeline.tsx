import { experience } from "@/content/site";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="text-accent">04</span> / Experience
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Four years of shipping.
          </h2>
        </div>

        <div className="mt-16 border-t border-line">
          {experience.map((job, i) => (
            <Reveal key={job.period} delay={i * 60}>
              <div className="grid gap-3 border-b border-line py-10 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-xs tracking-[0.18em] text-accent md:col-span-3">
                  {job.period}
                </p>
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
                    {job.company}
                  </p>
                </div>
                <p className="leading-relaxed text-soil md:col-span-4">
                  {job.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
