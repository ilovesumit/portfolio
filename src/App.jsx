import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const Education = lazy(() => import("./components/Education/Education"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const GitHubStats = lazy(() => import("./components/GitHubStats/GitHubStats"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 2000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={null}>
          <Education />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <GitHubStats />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
