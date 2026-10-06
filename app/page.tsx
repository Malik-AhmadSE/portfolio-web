import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import Work from "@/components/Work";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />

        {/* Skills strip — static, like a colophon */}
        <section className="border-b border-line">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 md:px-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
              Stack —
            </span>
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.16em] text-soil"
              >
                <span className="text-accent">/</span>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <Work />
        <Services />
        <About />
        <Timeline />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
