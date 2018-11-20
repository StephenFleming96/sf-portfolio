import React from "react";
import "./home.scss";

import { NavLink } from "react-router-dom";
import GitHubLogo from "../img/GitHub-Mark.png";
import LinkedIn from "../img/In.png";

const ImgAndDescription = (logo, name, url) => (
  <div className="column img-column">
    <div className="columns img-columns ">
      <div className="column is-one-half">
	  	<a href={url}>
        <img
          src={logo}
          alt={name}
          className=" img-right"
          width="64"
          height="64"
        /></a>
      </div>
      <div className="column flex  is-one-half">
        <a className="flex-item-center">{name}</a>
      </div>
    </div>
  </div>
);

const Home = () => (
  <div>
    <div className="columns ">
      <div className="column section-home">
        <h2>home</h2>
        <p>
          sample sample sample sample sample sample sample sample sample sample
          sample sample sample sample sample sample sample sample{" "}
        </p>
      </div>
    </div>
    <div className="columns">
      <div className="column section-content">
        <h3>Projects</h3>
        <p>sample sample sample sample sample </p>
        <p>sample sample sample sample sample </p>
      </div>
      <div className="column section-content">
        <h3>Contact</h3>
        <p>sample sample sample sample sample </p>
        <p>sample sample sample sample sample </p>
      </div>
    </div>
    <div className="columns">
      {ImgAndDescription(GitHubLogo, "Github", "https://github.com/StephenFleming96")}
      {ImgAndDescription(LinkedIn, "LinkedIn", "https://www.linkedin.com/feed/")}
    </div>
  </div>
);

export default Home;
