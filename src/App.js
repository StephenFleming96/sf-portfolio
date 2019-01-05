//react imports
import React, { Component } from "react";
import { Route } from "react-router-dom";

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//pages
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

//styling
import "bulma/css/bulma.css";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    document.title = "Steve Fleming | Portfolio";
  }

  render() {
    return (
      <div className="">
        <Navbar />

        <div className="body flex flex-item-container flex-hoz-center">
          <div className="body-item">
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />

            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
