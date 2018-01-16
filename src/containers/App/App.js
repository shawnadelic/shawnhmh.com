import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import { Home } from '../../containers'

import './App.css'

class Resume extends Component {
  render() {
    return (
      <div>
        <h2>Resume</h2>
        <p><a href="http://www.shawnhmh.com/site/assets/files/1014/her_many_horses_-_resume.pdf">Download Resume (PDF)</a></p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header className="header">
            <h1 className="header-title">Shawn Her Many Horses</h1>
          </header>
          <div className="content-container">
            <Switch>
              <Route path="/resume" component={Resume}/>
              <Route component={Home}/>
            </Switch>
          </div>
          <div className="footer">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/resume'>Resume</Link></li>
              <li><a href="https://github.com/shawnadelic/">Github</a></li>
              <li><a href="https://www.linkedin.com/in/shawnadelic/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
