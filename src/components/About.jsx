import React from "react";

const About = () => {
  return (
    <section className="about" id="About">
      <div className="about-content">
        {/* Optional Image Block (left blank in your original HTML) */}
        <div className="about-image">
          {/* You can add <img src="about.png" alt="About" /> if needed later */}
        </div>

        <div className="about-text">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3 className="text-animation">
            <span className="line">Passionate Full-Stack Developer</span>
            <span className="line">Creative UI/UX Designer</span>
          </h3>
          <p>
            I am a dedicated full-stack developer with extensive experience in
            both frontend and backend technologies, primarily leveraging the
            MERN stack (MongoDB, Express.js, React, and Node.js) to build
            dynamic and responsive web applications. My background in UI/UX
            design allows me to create visually appealing and user-centric
            interfaces, ensuring a seamless experience for users. I am
            passionate about continuous learning and thrive on tackling
            challenging projects that push the boundaries of my skills and
            creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
