import Navbar from "./components/layout/Navbar";
import GridBackground from "./components/ui/GridBackground";
import CustomCursor from "./components/ui/CustomCursor";
import useDocumentTitle from "./hooks/useDocumentTitle";

import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Technologies from "./sections/technologies/Technologies";
import Education from "./sections/education/Education";
import Contact from "./sections/contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
  useDocumentTitle();
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="relative bg-white">
        <GridBackground />

        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Technologies />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;