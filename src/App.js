import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

//Pages
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/">
            <Home
              title="Karen's"
              location="/everywhere"
              locationName="Continue"
            />
          </Route>
          <Route exact path="/everywhere">
            <Home
              title="They're Everywhere"
              location="/inthestreets"
              locationName="Continue"
            />
          </Route>
          <Route exact path="/inthestreets">
            <Home title="In Our Streets" location="/" locationName="Continue" />
          </Route>
        </Fragment>
      </Router>
    );
  }
}

export default App;
