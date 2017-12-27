import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Connect from "./components/connect/connect";
import Resources from "./components/resources/resources";
import Contact from "./components/contact/contact";
import registerServiceWorker from "./utils/registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/connect" component={Connect} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
