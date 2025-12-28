import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CaseStudyBrightSpeak from "./pages/CaseStudyBrightSpeak";

export default function App() {
  return (
    <>
      <Navbar />

      {/* spacer so content isn't hidden under fixed navbar */}
      <div className="pt-20">
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
        </Routes>
      </div>
    </>
  );
}
