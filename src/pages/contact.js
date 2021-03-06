import React from "react";
import { GitHubLink, LinkedInLink } from "../components/social-icons";

import "./contact.scss";

const Contact = () => (
  <div className="columns three-quart margin-center">
    <div className="column contact-fields">
      <br />
      <h2>Stephen Fleming</h2>
      <p>Melbourne, Australia</p>
      <br />
      <p>
        I can be reached via phone at <a href="tel:0422259905">04 222 599 05</a>,
      </p>
      <p>
        or email at {" "}
        <a href="mailto:steve@steve-fleming.com">Steve@Steve-Fleming.com</a>
      </p>
    </div>
    <div className="column">
      {<GitHubLink />}
      {<LinkedInLink />}
    </div>
  </div>
);

export default Contact;
