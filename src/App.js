import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing/Landing'

/**
 * landing-page
 * introduction
 * projects
 * footer
 */

class App extends Component {
  render() {
    return (
      <div className="App">
          <Landing />
          <div id="temp1"></div>
          <div id="temp2"></div>
      </div>
    );
  }
}

export default App;
