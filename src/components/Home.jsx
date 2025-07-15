import React from "react";

const Home = () => {
  return (
    <section className="home" id="Home">
      {/* Social Links FIRST */}
      <div className="home-sci">
        <a href="https://www.facebook.com/">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/loganathan-s-15525b281">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/loganathan-15025">
          <i className="bx bxl-github"></i>
        </a>
      </div>

      {/* Profile Image SECOND */}
      <div className="home-img">
        <div className="glow">
          <span></span>
          <span></span>
          <div className="image">
            <img src="mypic.jpeg" alt="Loganathan's Profile" />
          </div>
        </div>
      </div>

      {/* Text & Button THIRD */}
      <div className="home-content">
        <h1>Hi, I'm LOGANATHAN S</h1>
        <br />
        <h3>FULL-STACK DEVELOPER</h3>
        <br />
        <a href="#Contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
