import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Connect from './components/connect';
import Resources from './components/resources';
import './assets/styles.css';
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
