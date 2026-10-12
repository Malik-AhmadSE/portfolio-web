import type { Project } from "@/content/site";
import LaptopMockup from "./LaptopMockup";
import PhoneMockup from "./PhoneMockup";

/**
 * The signature composition: a browser frame running the live site,
 * with a phone frame overlapping the corner, showing the same
 * project on mobile. On phone-width screens the overlap collapses
 * to a single device — the live mobile view when one exists.
 *
 * Both variants stay in the DOM, but the hidden one never mounts an
 * iframe: the mockups lazy-load via IntersectionObserver, and a
 * display:none element never intersects.
 */
export default function DeviceShowcase({ project }: { project: Project }) {
  return (
    <>
      {/* Phone-width screens: one device, no overlap */}
      <div className="mb-6 sm:hidden">
        {project.mobileImage ? (
          <div className="mx-auto w-full max-w-[300px]">
            <PhoneMockup
              url={project.liveUrl}
              src={project.mobileImage}
              alt={`${project.name} on mobile`}
              accent={project.accent}
            />
          </div>
        ) : (
          <LaptopMockup
            url={project.liveUrl}
            src={project.image}
            alt={`${project.name} website`}
          />
        )}
      </div>

      {/* sm and up: laptop with the phone overlapping the corner */}
      <div className="relative mb-28 hidden pr-[16%] sm:mb-24 sm:block sm:pr-[14%]">
        <LaptopMockup
          url={project.liveUrl}
          src={project.image}
          alt={`${project.name} website`}
        />
        {project.mobileImage && (
          <div className="absolute -right-1 top-[42%] z-10 w-[22%] min-w-[84px] sm:-right-3">
            <PhoneMockup
              url={project.liveUrl}
              src={project.mobileImage}
              alt={`${project.name} on mobile`}
              accent={project.accent}
            />
          </div>
        )}
      </div>
    </>
  );
}
