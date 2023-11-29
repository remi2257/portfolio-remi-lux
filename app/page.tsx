import About from "./About";
import Hero from "./Hero";
import ProfessionalExperiences from "./ProfessionalExperiences";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="container space-y-24 overflow-x-hidden py-8">
      <Hero className="mx-auto max-w-prose" />

      <About className="mx-auto max-w-prose" index={1} />
      <Projects className="mx-auto" index={2} />
      <ProfessionalExperiences className="mx-auto" index={3} />
    </main>
  );
}
