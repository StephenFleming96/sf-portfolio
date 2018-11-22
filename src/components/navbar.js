import React, { Component } from "react";

import Menu from "./menu";

import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav flex">
        <nav className="full flex flex-spaced">
          <div className="flex flex-vert-center">
            <div className="flex flex-item">
              <a className="flex-item-center padding-side nav-icon" href="/">
                SF
              </a>
            </div>
            <div className="flex flex-item-container">
              <p className="nav-spacer">|</p>
              <h1 className="flex-item-center nav-title">STEVE FLEMING</h1>
            </div>
          </div>
          
          <Menu />
        </nav>
      </header>
    );
  }
}

export default Navbar;

/*
     <nav className="columns">
          <div className="column is-one-third">
            <div className="columns">
              <div className="column is-one-half icon">
                <p className="">ICON</p>
              </div>

              <div className="column is-one-half">
                <p className="nav-header">Stephen Fleming</p>
              </div>
            </div>
          </div>

          <div className="column is-two-thirds">
            <ul className="list-links right align-vertical">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          */
