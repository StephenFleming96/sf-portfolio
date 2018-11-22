import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./menu.scss";

class Menu extends Component {
  constructor(props, context) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.getMenuItems = this.getMenuItems.bind(this);
    this.getMenuBurger = this.getMenuBurger.bind(this);
    this.isSmallScreen = this.isSmallScreen.bind(this);

    this.shouldLinksBeVisible = this.shouldLinksBeVisible.bind(this);

    this.windowResizeHandler = this.windowResizeHandler.bind(this);

    window.addEventListener("resize", this.windowResizeHandler);
  }

  componentWillMount() {
    this.setState({
      menuOpen: false,
      displayListItems: true
    });
  }

  componentDidMount() {
    this.windowResizeHandler();
    window.addEventListener("resize", this.windowResizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResizeHandler);
  }

  windowResizeHandler() {
    this.setState({
      menuOpen: false,
      displayListItems: this.shouldLinksBeVisible()
    });
  }

  shouldLinksBeVisible() {
    return !this.isSmallScreen() || this.state.menuOpen;
  }

  isSmallScreen() {
    return window.innerWidth <= 768;
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
    this.forceUpdate();
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  getMenuBurger() {
    let burgerClassName = "list-burger";

    if (this.shouldLinksBeVisible()) burgerClassName += " list-burger-abs";

    return (
      <div className="list-burger-container">
        <button
          className={burgerClassName}
          id="menu-burger"
          onClick={this.toggleMenu}
        >
          | | |
        </button>
      </div>
    );
  }

  getMenuItems() {
    let listContainerClassName =
      "flex list-links-container-" +
      (this.shouldLinksBeVisible() ? "abs" : "none");

    return (
      <div className={listContainerClassName}>
        <ul className="list-links right flex flex-item-container">
          <li className="flex-item-center">
            <NavLink to="/" onClick={this.closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={this.closeMenu}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={this.closeMenu}>
              CONTACT
            </NavLink>
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
