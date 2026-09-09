import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { WorkExperience } from "./components/WorkExperience.tsx";
import { ProjectsPreview } from "./components/ProjectsPreview.tsx";
import { CoreTechnologies } from "./components/CoreTechnologies.tsx";
import { ServicesOffered } from "./components/ServicesOffered.tsx";
import { Contact } from "./components/Contact.tsx";
import { Footer } from "./components/Footer.tsx";
import { HomeContactSection } from "./components/HomeContactSection.tsx";
import { AboutPage } from "./components/AboutPage.tsx";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export function App() {
  return (
    <div className="portfolio-app">
      <ScrollToTopOnRouteChange />
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WorkExperience />
                <ProjectsPreview />
                <CoreTechnologies />
                <ServicesOffered />
                <HomeContactSection />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
