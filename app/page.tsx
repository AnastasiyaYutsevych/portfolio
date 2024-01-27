import { usePathname } from "next/navigation";
import ExperienceSection from "./experience-section";
import MainSection from "./main-section";
import ProjectsSection from "./projects-section";

export default function Home() {
  return (
    <main className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900  h-full w-full font-sans">
      <div className="flex lg:px-24 px-6 lg:flex-row flex-col lg:justify-between lg:gap-4">
        <MainSection />
        <div className="flex flex-col basis-2/3 lg:w-1/2 py-12  lg:ml-16  lg:pt-12 lg:py-0">
          <ExperienceSection />
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}
