import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import registerServiceWorker from "./utils/registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about" component={Home} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
