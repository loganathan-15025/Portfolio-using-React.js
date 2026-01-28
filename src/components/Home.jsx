import React, { useState, useEffect } from "react";

const Home = () => {
  const titles = [
    "FULL-STACK DEVELOPER",
    "AI ENGINEER",
    "DATA ENGINEER",
    "DATA ANALYST",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="home" id="Home">
      {/* Social Links */}
      <div className="home-sci">
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/loganathan-s-15525b281"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/loganathan-15025"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>

      {/* Profile Image with Animated Border */}
      <div className="home-img">
        <div className="glow">
          <div className="image">
            <img src="mypic.jpeg" alt="Loganathan's Profile" />
          </div>
        </div>
      </div>

      {/* Text & Button */}
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight-name">LOGANATHAN S</span>
        </h1>
        <h3 className={`rotating-title ${isVisible ? "visible" : "hidden"}`}>
          {titles[currentIndex]}
        </h3>
        <a href="#Contact" className="btn home-btn">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
