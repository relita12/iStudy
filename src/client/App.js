import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Common/Navbar";

export default class App extends Component {
  constructor() {
    super();
  }
  componentWillUnmount() {}
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
        </Switch>
      </>
    );
  }
}
