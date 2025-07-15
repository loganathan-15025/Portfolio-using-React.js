import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <h2 className="heading">
        Skills <span>Overview</span>
      </h2>
      <div className="skills-container">
        <div className="skill-box">
          <h2>Frontend Technologies</h2>
          <div className="sub-skills">
            <div className="sub-skill">HTML</div>
            <div className="sub-skill">CSS</div>
            <div className="sub-skill">JavaScript</div>
            <div className="sub-skill">React JS</div>
            <div className="sub-skill">Bootstrap</div>
          </div>
        </div>

        <div className="skill-box">
          <h2>Backend Technologies</h2>
          <div className="sub-skills">
            <div className="sub-skill">Node.js</div>
            <div className="sub-skill">Express.js</div>
            <div className="sub-skill">MongoDB</div>
            <div className="sub-skill">MySQL</div>
          </div>
        </div>

        <div className="skill-box">
          <h2>Programming Languages</h2>
          <div className="sub-skills">
            <div className="sub-skill">Python</div>
            <div className="sub-skill">Java</div>
            <div className="sub-skill">C</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
