import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PencilCursor from "@/components/PencilCursor";
import SketchScrollProgress from "@/components/SketchScrollProgress";
import SketchDivider from "@/components/SketchDivider";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <PencilCursor />
      <SketchScrollProgress />
      <Navbar />
      <Hero />
      <SketchDivider variant="wave" />
      <About />
      <SketchDivider variant="zigzag" />
      <Projects />
      <SketchDivider variant="scribble" inverted />
      <Experience />
      <SketchDivider variant="dots" />
      <Achievements />
      <SketchDivider variant="crosshatch" />
      <Testimonials />
      <SketchDivider variant="wave" />
      <Contact />
      <Footer />
    </main>
  );
}
