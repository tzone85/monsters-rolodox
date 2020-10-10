import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello Thando Mini'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={ ()=> this.setState({string: 'Hallo Mncedi'})}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
