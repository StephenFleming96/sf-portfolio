import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./menu.scss";

class Menu extends Component {
  constructor(props, context) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
    this.getMenuBurger = this.getMenuBurger.bind(this);
    this.isSmallScreen = this.isSmallScreen.bind(this);

    this.state = {
	  menuOpen: false,
	  displayListItems: true
    };
  }

  isSmallScreen() {
    return window.innerWidth <= 768;
  }

  toggleMenu() {
    this.state.menuOpen = !this.state.menuOpen;
    this.forceUpdate();
  }

  getMenuBurger() {
    let burgerClassName = "list-burger";

    if (this.state.menuOpen) burgerClassName += " list-burger-abs";

    return (
      <div className="list-burger-container">
        <ul
          className={burgerClassName}
          id="menu-burger"
          onClick={this.toggleMenu}
        >
          <li>|</li>
          <li>|</li>
          <li>|</li>
        </ul>
      </div>
    );
  }

  getMenuItems() {
    if (!this.isSmallScreen() || this.state.menuOpen || this.state.displayListItems) {
      return (
        <div class="list-links-container">
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

    return <div />;
  }

  render() {

    return (
      <div className="flex flex-item-wide flex-rtl">
        {this.getMenuItems()}
        {this.getMenuBurger()}
      </div>
    );
  }
}

export default Menu;
