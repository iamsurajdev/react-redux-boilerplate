import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import PageOne from "../pages/pageOne";
import PageTwo from "../pages/pageTwo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/one" exact component={PageOne} />
        <Route path="/two" exact component={PageTwo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
