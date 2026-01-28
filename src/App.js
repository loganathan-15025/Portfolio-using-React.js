import React from "react";
import "./index.css"; // this is your original style.css renamed

// Import all your components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // optional
import CursorGlow from "./components/CursorGlow";

// Particle Background Component
const ParticleBackground = () => {
  return (
    <>
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="geo-shape circle"></div>
      <div className="geo-shape triangle"></div>
      <div className="geo-shape square"></div>
    </>
  );
};

function App() {
  return (
    <>
      <CursorGlow />
      <ParticleBackground />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
