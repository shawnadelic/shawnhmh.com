import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Shawn Her Many Horses</h1>
        </header>
        <div className="app-body">
          <h2 className="app-body-header">Programmer, Developer, Engineer, etc.</h2>
          <p>Hi, my name is Shawn. I'm a computer programmer currently residing in the Los Angeles area. This is my little corner of the web where I post information regarding any projects I'm currently working on. In addition to programming, I also enjoy art, music, and local culture.</p>
          <p>I can be contacted at <strong>shawnhmh@gmail.com</strong>.</p>
        </div>
        <div className="app-footer">
          <ul>
            <li><a href='#'>Resume</a></li>
            <li><a href='#'>Github</a></li>
            <li><a href='#'>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
