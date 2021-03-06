import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//Pages
import Home from "./pages/Home";
import WhatdoWeDo from "./pages/WhatDoWeDo";
import Reflection from "./pages/Reflection";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/">
            <Home
              title="Karens..."
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
            <Home
              title="In Our Streets"
              location="/inourschools"
              locationName="Continue"
              url="https://www.youtube.com/watch?v=HBspygDA8Vo"
            />
          </Route>
          <Route exact path="/inourschools">
            <Home
              title="In Our Schools"
              location="/inourstores"
              locationName="Continue"
              url="https://www.youtube.com/watch?v=ue2-_Uf19Io"
            />
          </Route>
          <Route exact path="/inourstores">
            <Home
              title="In Our Stores"
              location="/whatdowedo"
              locationName="Continue"
              url="https://www.youtube.com/watch?v=GbWarMopYjQ"
            />
          </Route>
          <Route exact path="/whatdowedo">
            <WhatdoWeDo />
          </Route>
          <Route exact path="/reflection">
            <Reflection />
          </Route>
          {/* REDIRECT */}
          {/* <Route exact path="/404" component={PageNotFound} />
          <Redirect path="/404" /> */}
        </Fragment>
      </Router>
    );
  }
}

export default App;
