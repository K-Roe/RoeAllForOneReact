import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SEO from "./components/SEO";
import CaseStudyBrightSpeak from "./pages/CaseStudyBrightSpeak";
import CaseStudyBrightBuddy from "./pages/CaseStudyBrightBuddy";
import Donate from "./pages/Donate";
import About from "./pages/About";
import BrightSpeak from "./pages/BrightSpeak";
import Impact from "./pages/Impact";
import Schools from "./pages/Schools";
import Team from "./pages/Team";
import { organisationSchema } from "./data/siteContent";

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
                <SEO
                  title="BrightSenApps | Free SEND communication tools for children"
                  description="BrightSenApps creates accessible digital tools for children with SEND, autism, communication difficulties, and additional learning needs. Download Bright Speak for free."
                  path="/"
                  schema={organisationSchema}
                />
                <Hero />
                <Projects />
                <Contact />
              </>
            }
          />

          <Route path="/bright-speak" element={<BrightSpeak />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/team" element={<Team />} />
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
