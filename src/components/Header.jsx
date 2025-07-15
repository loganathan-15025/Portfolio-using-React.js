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
          Portfolio.
        </a>

        <nav className="navbar" id="navbar">
          <a href="#Home" style={{ "--i": 1 }}>
            Home
          </a>
          <a href="#About" style={{ "--i": 2 }}>
            About
          </a>
          <a href="#Skills" style={{ "--i": 4 }}>
            Skills
          </a>
          <a href="#Projects" style={{ "--i": 5 }}>
            Projects
          </a>
          <a href="#Contact" style={{ "--i": 3 }}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;