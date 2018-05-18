import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from './component/Deck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Poker Calculator</h1>
        </header>
        <Deck/>
      </div>
    );
  }
}

export default App;
