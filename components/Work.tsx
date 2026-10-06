import Link from "next/link";
import { projects } from "@/content/site";
import DeviceShowcase from "./DeviceShowcase";
import Reveal from "./Reveal";

function GitHubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.49 5.92.43.38.82 1.11.82 2.24l-.01 3.32c0 .31.21.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              <span className="text-accent">01</span> / Selected work
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Websites in the wild.
            </h2>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
            {String(projects.length).padStart(2, "0")} case studies · Live on
            the web
          </p>
        </div>

        {/* Rows */}
        <div className="mt-16">
          {projects.map((project, i) => {
            const flip = i % 2 === 1;
            const headlineMetric = project.metrics[0];
            return (
              <article
                key={project.slug}
                className="group grid items-center gap-12 border-t border-line py-16 lg:grid-cols-12 md:py-20"
              >
                <Reveal
                  className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                    № {String(i + 1).padStart(2, "0")} — {project.category}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-5xl">
                    <Link href={`/work/${project.slug}`}>{project.name}</Link>
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-soil">
                    {project.tagline}.
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-soil"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 font-mono text-xs text-fog">
                    {project.year} · {headlineMetric.value}{" "}
                    {headlineMetric.label}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/work/${project.slug}`}
                      className="link-underline font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink"
                    >
                      Read case study →
                    </Link>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-soil transition-colors hover:text-ink"
                    >
                      Visit live ↗
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} source on GitHub`}
                      className="flex h-10 w-10 items-center justify-center border border-ink/25 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </Reveal>

                <Reveal
                  delay={120}
                  className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}
                >
                  <figure>
                    <DeviceShowcase project={project} />
                    <figcaption className="mt-0 pr-[16%] font-mono text-[10px] uppercase tracking-[0.2em] text-fog sm:pr-[14%]">
                      fig. {String(i + 1).padStart(2, "0")} — {project.name}
                    </figcaption>
                  </figure>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
