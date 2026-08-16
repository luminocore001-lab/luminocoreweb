import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Founder from "@/components/Founder";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Founder />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
