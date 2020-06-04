import Navbar from "./components/Shared/Navbar";
import React from "react";

import Home from "./components/Views/Home";
import Discover from "./components/Views/Discover";
import Search from "./components/Views/Search";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <div>
        <Switch>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
