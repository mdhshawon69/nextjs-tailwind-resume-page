import Navbar from "@/components/navbar";
import Hero from "./(sections)/hero";
import Projects from "./(sections)/projects";
import Experience from "./(sections)/experience";
import Skills from "./(sections)/skills";
import Contact from "./(sections)/contact";
import Footer from "./(sections)/footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
