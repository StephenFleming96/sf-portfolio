import React, { Component } from "react";

import Menu from "./menu";

import "./navbar.scss";

const Navbar = () => {
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
};

export default Navbar;