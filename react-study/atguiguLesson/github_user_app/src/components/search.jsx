import React, { Component } from 'react'
import PropTypes from 'prop-types'


import './style/search.css'

class Search extends Component {
  static propTypes = {
    setSearchName:PropTypes.func.isRequired
  }
  search = () => {
    const searchName = this.input.value.trim()
    if(searchName){
      this.props.setSearchName(searchName)
    }
  }
  render(){
    return (
      <div className="search-container">
        <h2>Search Github Users</h2>
        <div className="serach-content">
          <input type="text" ref={input => this.input = input} className="search-input" placeholder="Enter the Name You Search"/>
          <button className="search-btn" onClick={this.search}>Search</button>
        </div>  
      </div>
    )
  }
}
export default Search