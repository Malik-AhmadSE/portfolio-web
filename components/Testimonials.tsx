import { testimonials } from "@/content/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
            <span className="text-accent">05</span> / Kind words
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            What clients say.
          </h2>
        </div>

        <div className="mt-16 grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={i * 80} className="h-full">
              <blockquote className="flex h-full flex-col justify-between gap-10 bg-ink p-8 transition-colors duration-300 hover:bg-white/5">
                <div>
                  <span
                    aria-hidden="true"
                    className="font-display text-6xl leading-none text-accent"
                  >
                    &ldquo;
                  </span>
                  <p className="mt-4 font-display text-xl italic leading-relaxed text-paper">
                    {t.quote}
                  </p>
                </div>
                <footer className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  <p className="text-paper">{t.author}</p>
                  <p className="mt-1 text-paper/50">{t.meta}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
