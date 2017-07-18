import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const element = <h1>Hello, world!</h1>;

class App extends Component {

  activateLasers(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {element}
        </div>
        <button onClick={this.activateLasers}>
          Activate Lasers
        </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
