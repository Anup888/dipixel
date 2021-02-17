import React, { Component } from "react";
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "view/shared/header";
import { logoData, MenuItemData } from "data/Header";
import Home from "view/client/Home";
import Services from "view/client/Services";
import ProjectList from "view/client/ProjectsList";
import Projects from "view/client/Projects";
import AboutUs from "view/client/Aboutus";
import Footer from "view/shared/footer";
// import "assets/app/style.module.scss";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header logoData={logoData} MenuItemData={MenuItemData} />
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/projectlist">
              <ProjectList />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            {/* <Route path="/contact-us">
              <AboutUs />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
