import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import { Home } from '../../components'
import { Resume } from '../../components'

import './App.css'


class NavLink extends Link {
  render() {
    const {icon, label, ...rest} = this.props
    //const icon = (<i class=`fas fa-${abcb}`></i>)

    return (
      <Link {...rest}>
        <span class='nav-label'>{ label }</span>
        <span class='nav-icon'><i class={`fas fa-${ icon }`}></i></span>
      </Link>
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
              <li><NavLink to='/' label='Home' icon='home' /></li>
              <li><NavLink to='/resume' label='Resume' icon='file' /></li>
              <li><a href="https://github.com/shawnadelic/">
                <span class='nav-label'>Github</span>
                <span class='nav-icon'><i class='fab fa-github'></i></span>
              </a></li>
              <li><a href="https://www.linkedin.com/in/shawnadelic/">
                <span class='nav-label'>LinkedIn</span>
                <span class='nav-icon'><i class='fab fa-linkedin'></i></span>
              </a></li>
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
