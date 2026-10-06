import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, site } from "@/content/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import DeviceShowcase from "@/components/DeviceShowcase";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study · ${site.name}`,
    description: project.description,
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
      <span className="text-accent">—</span>
      {children}
    </h2>
  );
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const headlineMetric = project.metrics[0];

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* ── hero ── */}
        <section className="relative overflow-hidden border-b border-line">
          <div
            className="grid-rules pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:px-10 md:pt-36">
            <Reveal>
              <Link
                href="/#work"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] text-soil hover:text-ink"
              >
                ← All work
              </Link>
            </Reveal>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal delay={60}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                    Case study № {String(idx + 1).padStart(2, "0")} —{" "}
                    <span className="text-accent">{project.category}</span>
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="mt-4 font-display text-6xl font-semibold tracking-tight md:text-7xl">
                    {project.name}
                  </h1>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-4 font-display text-2xl italic text-soil">
                    {project.tagline}
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
                    {[
                      ["Role", project.role],
                      ["Timeline", project.timeline],
                      ["Platform", project.platform],
                      ["Stack", project.tags.join(" · ")],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                          {k}
                        </dt>
                        <dd className="mt-1.5 text-sm font-medium leading-snug">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>

                <Reveal delay={300}>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ink px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-accent"
                    >
                      Visit live site ↗
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-soil hover:text-ink"
                    >
                      View source
                    </a>
                    <span className="font-mono text-xs text-fog">
                      {headlineMetric.value} {headlineMetric.label}
                    </span>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <Reveal delay={200}>
                  <figure>
                    <DeviceShowcase project={project} />
                    <figcaption className="mt-0 pr-[16%] font-mono text-[10px] uppercase tracking-[0.2em] text-fog sm:pr-[14%]">
                      fig. {String(idx + 1).padStart(2, "0")} — {project.name}
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── metrics band ── */}
        <section className="border-b border-line bg-cream">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-6 py-14 md:grid-cols-4 md:px-10">
            {project.metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-accent pl-5">
                <p className="font-display text-4xl font-semibold tracking-tight">
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── the story ── */}
        <section className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            {/* problem */}
            <div className="md:col-span-5">
              <Reveal>
                <SectionHeading>The problem</SectionHeading>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 font-display text-2xl leading-[1.5] text-ink">
                  {project.problem}
                </p>
              </Reveal>
            </div>

            {/* approach */}
            <div className="md:col-span-7">
              <Reveal>
                <SectionHeading>The approach</SectionHeading>
              </Reveal>
              <ol className="mt-6 space-y-8">
                {project.approach.map((step, i) => (
                  <li key={i} className="border-t border-line pt-6">
                    <Reveal delay={120 + i * 80}>
                      <div className="flex gap-6">
                        <span className="font-mono text-sm font-medium text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="leading-[1.8] text-soil">{step}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* outcome */}
          <div className="mt-24 grid gap-14 md:mt-32 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <SectionHeading>The outcome</SectionHeading>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 font-display text-2xl leading-[1.5] text-ink">
                  {project.outcome}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={200}>
                <blockquote className="border-l-2 border-accent bg-cream p-8">
                  <p className="font-display text-xl italic leading-relaxed">
                    &ldquo;{project.quote.text}&rdquo;
                  </p>
                  <footer className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                    — {project.quote.author}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── next case study ── */}
        <section className="border-t border-line">
          <Link href={`/work/${next.slug}`} className="group block">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-14 md:px-10 md:py-20">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                  Next case study
                </p>
                <p className="mt-3 font-display text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-6xl">
                  {next.name} →
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
                {next.category}
              </span>
            </div>
          </Link>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
