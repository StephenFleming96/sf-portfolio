//react imports
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//pages
import Home from "./pages/home";
import Contact from "./pages/contact";

//styling
import "bulma/css/bulma.css";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />

        <div className="body flex flex-item-container flex-hoz-center">
          <div className="body-item">
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
