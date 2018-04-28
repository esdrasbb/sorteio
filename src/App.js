import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sorteio from "./component/sorteio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sorteio do Tio Braga</h1>
        </header>
        <br />
        <Sorteio />
      </div>
    );
  }
}

export default App;
