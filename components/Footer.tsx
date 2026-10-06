import Link from "next/link";
import { site } from "@/content/site";
import LogoMark from "./LogoMark";

const socials = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}` },
  { label: "Email", href: `mailto:${site.email}` },
];

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-20 md:px-10">
        {/* Signature line */}
        <div className="flex flex-wrap items-end justify-between gap-10 border-b border-paper/15 pb-14">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Let&rsquo;s build something{" "}
            <em className="italic text-accent">worth shipping.</em>
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-paper/80 hover:text-paper"
          >
            {site.email} →
          </a>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-lg font-semibold">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              {site.role}. Web apps that feel alive — four years, thirty-plus
              shipped projects, from dashboards to storefronts.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
              Index
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-paper/75 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
              Elsewhere
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="border border-paper/20 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Baseline */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
          <p>
            © {year} {site.name} — All rights reserved
          </p>
          <p>React · Next.js · Node.js</p>
        </div>
      </div>
    </footer>
  );
}
