import React from "react";
import "./projects.scss";

const Projects = () => (
  <div>
    <div className="columns">
      <div className="column is-full flex-hoz-center">
        <div className="">
          <h2>Projects</h2>
        </div>
      </div>
    </div>

    <div className="columns text-centered">
      <div className="column is-one-half">
        <h3>Portfolio</h3>
        <p className="half">
          The site you are currently viewing. Built with React, the source can
          be found{" "}
          <a href="https://github.com/StephenFleming96/sf-portfolio">here</a>.
        </p>
      </div>
      <div className="column is-one-half">
        <h3>Shifra.IO</h3>
        <p className="half">
          <a href="shifra.io">Shifra</a> is an NGO focused on providing medical
          advice and assistance to individuals from a migrate background.
        </p>
      </div>
    </div>
    <div className="columns text-centered">
      <div className="column is-one-half">
        <h3>Task Manager</h3>
        <p className="half">
          Task Manager built in Ruby on Rails. Project is currently being
          rebuilt with an Angular7 front-end connected to a Rails API.
        </p>
      </div>

      <div className="column is-one-half">
        <h3>HTML Canvas - Turn Based Strategy</h3>
        <p className="half">
          A game made using Javascript and HTML5 Canvas produced for a game
          development competition.{" "}
          <a href="https://github.com/StephenFleming96/Canvas-JS-Turn-Based-Strategy">
            Source
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
