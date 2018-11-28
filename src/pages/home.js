import React from "react";
import "./home.scss";

import { GitHubLink, LinkedInLink } from "../components/social-icons.js";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div>
    <div className="columns flex flex-hoz-center">
      <div className="column three-quart section-home flex-item-center">
        <h2>About Me</h2>
        <br/>
        <p>
          My name is Steve. I am a recent Computer Science graduate based in
          Melbourne looking for work as a front-end, back-end or full stack
          developer.
        </p>
        <p>
          I have strong HTML, CSS and Javascript skills and am confident in
          using ReactJS.
        </p>
        <p>
          I also have experience with Ruby on Rails and Laravel (plus standalone
          PHP.)
        </p>
      </div>
    </div>

    <br />

    <div className="columns">
      <div className="column section-content">
        <h3>
          <NavLink to="/projects">Projects</NavLink>
        </h3>
        <p>In this section, I list and demonstrate some of the projects that I have created.</p>
        <p>Visit here for links to Github repositories showing my work.</p>
      </div>
      <div className="column section-content">
        <h3>
          <NavLink to="/contact">Contact</NavLink>
        </h3>
        <p>This page provides links to my social accounts and provides contact information.</p>
      </div>
    </div>
    <br />

    <div className="columns">
      <GitHubLink />
      <LinkedInLink />
    </div>
  </div>
);

export default Home;
