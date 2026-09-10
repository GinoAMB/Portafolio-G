import Navbar from "./components/layout/Navbar";
import GridBackground from "./components/ui/GridBackground";

import Hero from "./sections/hero/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main className="relative bg-white">
        <GridBackground />

        <div className="relative z-10">
          <Hero />

          {/* <About /> */}
          {/* <Experience /> */}
          {/* <Projects /> */}
          {/* <Stack /> */}
          {/* <Contact /> */}
        </div>
      </main>
    </>
  );
}

export default App;