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

    this.shouldLinksBeVisible = this.shouldLinksBeVisible.bind(this);

    this.windowResizeHandler = this.windowResizeHandler.bind(this);

    this.state = {
      menuOpen: false,
      displayListItems: true
    };

    window.addEventListener("resize", this.windowResizeHandler);
  }

  componentDidMount() {
    this.windowResizeHandler();
    window.addEventListener('resize', this.windowResizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResizeHandler);
  }

  windowResizeHandler() {
	this.state.menuOpen = false;
    this.state.displayListItems = this.shouldLinksBeVisible();
  }

  shouldLinksBeVisible() {
    return !this.isSmallScreen() || this.state.menuOpen;
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

    if (this.shouldLinksBeVisible()) burgerClassName += " list-burger-abs";

    return (
      <div className="list-burger-container">
        <button className={burgerClassName} id="menu-burger" onClick={this.toggleMenu}>
          | | |
        </button>
       
      </div>
    );
  }
/* <ul
          className={burgerClassName}
          id="menu-burger"
          onClick={this.toggleMenu}
        >
          <li>|</li>
          <li>|</li>
          <li>|</li>
        </ul>*/
  getMenuItems() {
    let listContainerClassName =
      "list-links-container-" + (this.shouldLinksBeVisible() ? "abs" : "none");

    return (
      <div className={listContainerClassName}>
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
