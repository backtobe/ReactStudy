import React, { Component } from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

import About from './../views/about'
import Home from './../views/home'

class App extends Component {
  render(){
    return (
      <div>
        <header>React Router Demo</header>
        <div className="app-container">
          <div className="app-left">
            <NavLink to='/Home'>{Home}</NavLink>
            <NavLink to='/About'>{About}</NavLink>
          </div>
          <div className="app-right">
            <Switch>
              <Route path='/About' component={About}/>
              <Route path='/Home' component={Home}/>
              {/* <Redirect path='/About'/> */}
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
export default App