import React from "react";
import "./home.scss";

import {GitHubLink, LinkedInLink} from "../components/social-icons.js";

const Home = () => (
  <div>
    <div className="columns">
      <div className="column section-home">
        <h2>home</h2>
        <p>
          sample sample sample sample sample sample sample sample sample sample
          sample sample sample sample sample sample sample sample{" "}
        </p>
      </div>
    </div>

	<br/>
	
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
	<br/>
	
    <div className="columns">
      <GitHubLink/>
	  <LinkedInLink/>
    </div>
  </div>
);

export default Home;
