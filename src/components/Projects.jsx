import React from "react";

const Projects = () => {
  return (
    <section className="projects" id="Projects">
      <h1 className="prheading">
        Projects <span>Showcase</span>
      </h1>
      <div className="projects-container">
        <div className="project-box">
          <div className="project-box-inner">
            <h3 className="Taskm project-title">Task Manager</h3>
            <p>
              A fully functional Task Manager platform with features like add,
              delete and edit tasks and implemented the drag and drop feature
              for better convenience. Also implemented the deadline feature.
            </p>
            <a
              href="https://github.com/loganathan-15025"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-box">
          <div className="project-box-inner">
            <h3 className="netflix project-title">Ecommerce Website</h3>
            <p>
              A responsive ecommerce website that displays items and allows
              users to purchase products with a seamless shopping experience.
            </p>
            <a
              href="https://github.com/loganathan-15025"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-box">
          <div className="project-box-inner">
            <h3 className="spotify project-title">LetsListen</h3>
            <p>
              A music streaming app that offers a similar experience to Spotify
              and connects people with real-time chat functionality.
            </p>
            <a
              href="https://github.com/loganathan-15025"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
