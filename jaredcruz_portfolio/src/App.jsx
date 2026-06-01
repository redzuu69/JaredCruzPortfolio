import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectHighlights from "./components/ProjectHighlights";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import DeveloperStats from "./components/DeveloperStats";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DeveloperStats />
        <ProjectHighlights />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;