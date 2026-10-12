import { site } from "@/content/site";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                <span className="text-accent">05</span> / Contact
              </p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Have a role
                <br />
                in mind?
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-soil">
                I&rsquo;m a software engineer at Intellilake, open to full-time
                roles where I own the web stack end to end. Message me or grab
                my CV — I reply within a day.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton
                  href={`https://wa.me/${site.whatsapp}`}
                  variant="solid"
                  external
                >
                  Start a conversation
                </MagneticButton>
                <MagneticButton href={site.cvUrl} variant="outline" download>
                  Download CV ↓
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={120}>
              <dl className="border-t border-line">
                <div className="border-b border-line py-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                    Availability
                  </dt>
                  <dd className="mt-1.5 text-ink">{site.availability}</dd>
                </div>
                <div className="border-b border-line py-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                    Location
                  </dt>
                  <dd className="mt-1.5 text-ink">{site.location}</dd>
                </div>
                <div className="border-b border-line py-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                    Currently
                  </dt>
                  <dd className="mt-1.5 text-ink">
                    Software Engineer at Intellilake · via Axiom World
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
