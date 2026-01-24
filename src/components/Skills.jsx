import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <h2 className="heading">
        Skills <span>Overview</span>
      </h2>
      <div className="skills-container">
        <div className="skill-box">
          <div className="skill-icon">
            <i className="bx bx-code-alt"></i>
          </div>
          <h2>Frontend Technologies</h2>
          <div className="sub-skills">
            <div className="sub-skill">
              <i className="bx bxl-html5"></i> HTML
            </div>
            <div className="sub-skill">
              <i className="bx bxl-css3"></i> CSS
            </div>
            <div className="sub-skill">
              <i className="bx bxl-javascript"></i> JavaScript
            </div>
            <div className="sub-skill">
              <i className="bx bxl-react"></i> React JS
            </div>
            <div className="sub-skill">
              <i className="bx bxl-bootstrap"></i> Bootstrap
            </div>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-icon">
            <i className="bx bx-server"></i>
          </div>
          <h2>Backend Technologies</h2>
          <div className="sub-skills">
            <div className="sub-skill">
              <i className="bx bxl-nodejs"></i> Node.js
            </div>
            <div className="sub-skill">
              <i className="bx bx-network-chart"></i> Express.js
            </div>
            <div className="sub-skill">
              <i className="bx bxl-mongodb"></i> MongoDB
            </div>
            <div className="sub-skill">
              <i className="bx bx-data"></i> MySQL
            </div>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-icon">
            <i className="bx bx-terminal"></i>
          </div>
          <h2>Programming Languages</h2>
          <div className="sub-skills">
            <div className="sub-skill">
              <i className="bx bxl-python"></i> Python
            </div>
            <div className="sub-skill">
              <i className="bx bxl-java"></i> Java
            </div>
            <div className="sub-skill">
              <i className="bx bx-code-curly"></i> C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
