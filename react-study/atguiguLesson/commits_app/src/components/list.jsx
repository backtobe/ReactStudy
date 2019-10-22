import React, { Component } from 'react'
import Item from './listItem'

class List extends Component {
  render(){
    return (
      <div>
        <h3>评论回复：</h3>
        <div className="list-container">
        <Item />
        </div>   
      </div>
    )
  }
}
export default List