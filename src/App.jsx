import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CaseStudyBrightSpeak from "./pages/CaseStudyBrightSpeak";
import CaseStudyBrightBuddy from "./pages/CaseStudyBrightBuddy";
import Donate from "./pages/Donate";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Navbar />

      {/* spacer so content isn't hidden under fixed navbar */}
      <div className="pt-24 sm:pt-28">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Contact />
              </>
            }
          />

          <Route
            path="/case-study/brightspeak"
            element={<CaseStudyBrightSpeak />}
          />
          <Route
            path="/case-study/brightBuddy"
            element={<CaseStudyBrightBuddy />}
          />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
