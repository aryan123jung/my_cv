import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Leadership from "@/components/sections/leadership";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Loader from "@/components/ui/loader";
import Navbar from "@/components/ui/navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import Spotlight from "@/components/ui/spotlight";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Spotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
