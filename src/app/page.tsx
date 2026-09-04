import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-transparent to-accent/3">
      <Hero />
      {/* <Experience /> */}
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
