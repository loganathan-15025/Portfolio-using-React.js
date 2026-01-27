import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const overlay = document.getElementById("overlay");

    const toggleMenu = () => {
      navbar.classList.toggle("active");
      hamburger.classList.toggle("open");
      overlay.classList.toggle("active");
    };

    const closeMenu = () => {
      navbar.classList.remove("active");
      hamburger.classList.remove("open");
      overlay.classList.remove("active");
    };

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    // 🔁 Active link switch on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    };

    // Scroll event
    window.addEventListener("scroll", handleScroll);

    // Run it initially so Home is active on page load
    handleScroll();

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      overlay.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="overlay" id="overlay"></div>

      <header className="header">
        <div className="hamburger" id="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <a href="#Home" className="logo">
          <span style={{ "--i": 0 }}>L</span>
          <span style={{ "--i": 1 }}>o</span>
          <span style={{ "--i": 2 }}>g</span>
          <span style={{ "--i": 3 }}>a</span>
          <span style={{ "--i": 4 }}>n</span>
          <span style={{ "--i": 5 }}>a</span>
          <span style={{ "--i": 6 }}>t</span>
          <span style={{ "--i": 7 }}>h</span>
          <span style={{ "--i": 8 }}>a</span>
          <span style={{ "--i": 9 }}>n</span>
          <span className="logo-highlight" style={{ "--i": 10 }}>
            S
          </span>
        </a>

        <nav className="navbar" id="navbar">
          <a href="#Home" style={{ "--i": 1 }}>
            <span style={{ "--j": 0 }}>H</span>
            <span style={{ "--j": 1 }}>o</span>
            <span style={{ "--j": 2 }}>m</span>
            <span style={{ "--j": 3 }}>e</span>
          </a>
          <a href="#About" style={{ "--i": 2 }}>
            <span style={{ "--j": 0 }}>A</span>
            <span style={{ "--j": 1 }}>b</span>
            <span style={{ "--j": 2 }}>o</span>
            <span style={{ "--j": 3 }}>u</span>
            <span style={{ "--j": 4 }}>t</span>
          </a>
          <a href="#Skills" style={{ "--i": 4 }}>
            <span style={{ "--j": 0 }}>S</span>
            <span style={{ "--j": 1 }}>k</span>
            <span style={{ "--j": 2 }}>i</span>
            <span style={{ "--j": 3 }}>l</span>
            <span style={{ "--j": 4 }}>l</span>
            <span style={{ "--j": 5 }}>s</span>
          </a>
          <a href="#Projects" style={{ "--i": 5 }}>
            <span style={{ "--j": 0 }}>P</span>
            <span style={{ "--j": 1 }}>r</span>
            <span style={{ "--j": 2 }}>o</span>
            <span style={{ "--j": 3 }}>j</span>
            <span style={{ "--j": 4 }}>e</span>
            <span style={{ "--j": 5 }}>c</span>
            <span style={{ "--j": 6 }}>t</span>
            <span style={{ "--j": 7 }}>s</span>
          </a>
          <a href="#Contact" style={{ "--i": 3 }}>
            <span style={{ "--j": 0 }}>C</span>
            <span style={{ "--j": 1 }}>o</span>
            <span style={{ "--j": 2 }}>n</span>
            <span style={{ "--j": 3 }}>t</span>
            <span style={{ "--j": 4 }}>a</span>
            <span style={{ "--j": 5 }}>c</span>
            <span style={{ "--j": 6 }}>t</span>
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
