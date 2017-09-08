import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing/Landing'

/**
 * landing-page
 * introduction
 * 3D sphere cloud: https://codepen.io/jonathanhooker/pen/Kzrfg
 * projects
 * footer
 */

class App extends Component {
  render() {
    return (
      <div className="App">
          <Landing />
      </div>
    );
  }
}

export default App;
