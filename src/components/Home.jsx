import React from "react";

const Home = () => {
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
        <br />
        <h3>FULL-STACK DEVELOPER</h3>
        <br />
        <a href="#Contact" className="btn">
          <span>Contact Me</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Home;
