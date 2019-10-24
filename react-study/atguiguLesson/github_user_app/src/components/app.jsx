import React, { Component } from 'react'

import Main from './main.jsx'
import Search from './search.jsx'

import './style/app.css'

class App extends Component {
  state = {
    searchName:''
  }
  setSearchName = searchName => {
    this.setState({searchName})
  }
  render(){
    return (
      <div className="app-container">
        <Search setSearchName={this.setSearchName}/>  
        <Main searchName={this.state.searchName}/>
      </div>
    )
  }
}
export default App