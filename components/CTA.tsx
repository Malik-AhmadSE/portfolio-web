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
                <span className="text-accent">06</span> / Contact
              </p>
              <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Have a product
                <br />
                to build?
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-soil">
                Tell me what you&rsquo;re making. I&rsquo;ll reply within a day
                with honest thoughts on scope, timeline, and whether the web is
                the right tool.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton
                  href={`https://wa.me/${site.whatsapp}`}
                  variant="solid"
                  external
                >
                  Start a conversation
                </MagneticButton>
                <MagneticButton href={`mailto:${site.email}`} variant="outline">
                  {site.email}
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
                    Typical engagement
                  </dt>
                  <dd className="mt-1.5 text-ink">Fixed scope or monthly retainer</dd>                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
