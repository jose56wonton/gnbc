import React, { Component } from "react";
import Navbar from "./navBar";
import "../assets/styles.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero is-fullheight ">
          <Navbar />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
