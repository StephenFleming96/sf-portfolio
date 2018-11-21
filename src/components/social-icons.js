import React, {Component} from 'react';

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
		<div className="column flex is-one-half">
		  <a className="flex-item-center">{name}</a>
		</div>
	  </div>
	</div>
  );
  
  export const GitHubLink = ({props}) => ImgAndDescription(GitHubLogo, "Github", "https://github.com/StephenFleming96");
  export const LinkedInLink = ({props}) => ImgAndDescription(LinkedIn, "LinkedIn", "https://www.linkedin.com/feed/");