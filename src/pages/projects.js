import React from "react";
import './projects.scss'

const Projects = () => (
  <div className="">
    <div className="columns flex flex-hoz-center">
      <div className="column full">
        <h2>Projects</h2>
      </div>
    </div>

    <div className="columns project-items text-centered">
      <div className="column">
        <h3>Shifra.IO</h3>
      </div>

      <div className="column">
        <h3>Steve-Fleming.com</h3>
        <p>This is the site you are currently viewing.</p>
      </div>

      <div className="column">
        <h3>Task Manager</h3>
        <p>Task Manager built in Ruby on Rails.</p>
        <p>Project is currently being rebuilt with an Angular7 front-end connected to a Rails API.</p>
      </div>

      <div className="column">
        <h3>HTML Canvas - Turn Based Strategy</h3>
        <p></p>
      </div>
    </div>
  </div>
);

export default Projects;
