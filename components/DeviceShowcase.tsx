import type { Project } from "@/content/site";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";

/**
 * The signature composition: a browser frame running the live site,
 * with a phone frame overlapping the corner, showing the same
 * project on mobile.
 */
export default function DeviceShowcase({ project }: { project: Project }) {
  return (
    <div className="relative mb-28 pr-[16%] sm:mb-24 sm:pr-[14%]">
      <LaptopMockup
        url={project.liveUrl}
        src={project.image}
        alt={`${project.name} website`}
      />

      <div className="absolute -right-1 top-[42%] z-10 w-[22%] min-w-[84px] sm:-right-3">
        <PhoneMockup
          src={project.mobileImage}
          alt={`${project.name} on mobile`}
          accent={project.accent}
        />
      </div>
    </div>
  );
}
