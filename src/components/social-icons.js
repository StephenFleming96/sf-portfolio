import React from "react";

import GitHubLogo from "../img/GitHub-Mark.png";
import LinkedIn from "../img/In.png";

import "./social-icons.scss";

//take a logo object, heading and url, return formatted jsx
const ImgAndDescription = (logo, name, url) => (
  <div className="column img-column img-parent-container">
    <div className="columns img-parent ">
      <div className="column img-column is-one-half ">
        <a href={url} className="img-link img-container">
          <img
            src={logo}
            alt={name}
            className=" img-right"
            width="64"
            height="64"
          />
        </a>
      </div>
      <div className="column flex is-one-half img-name">
        <a href={url} className="">
          {name}
        </a>
      </div>
    </div>
  </div>
);

//build link for Github
export const GitHubLink = ({ props }) =>
  ImgAndDescription(
    GitHubLogo,
    "Github",
    "https://github.com/StephenFleming96"
  );

//build link for LinkedIn
export const LinkedInLink = ({ props }) =>
  ImgAndDescription(LinkedIn, "LinkedIn", "https://www.linkedin.com/feed/");
