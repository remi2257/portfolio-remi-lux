import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Hero from "./Hero";
import ProfessionalExperiences from "./ProfessionalExperiences";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="container flex flex-col items-center gap-y-24 overflow-x-hidden py-8">
      <Hero className="max-w-prose" />

      <About className="max-w-prose" index={1} />
      <ProfessionalExperiences index={2} />
      <Projects index={3} />
      <Education index={4} />

      <Contact className="max-w-prose" />
    </main>
  );
}
