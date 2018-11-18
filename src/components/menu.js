import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./menu.scss";

class Menu extends Component {
  constructor(props) {
	super(props);
	
	this.setState({menuOpen: false});
  }

  render() {
    return (
      <div className="flex flex-item-wide flex-rtl">
        <ul className="list-burger" id="menu-burger">
          <li>|</li>
          <li>|</li>
          <li>|</li>
        </ul>

        <ul className="list-links right flex flex-item-container">
          <li className="flex-item-center">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
