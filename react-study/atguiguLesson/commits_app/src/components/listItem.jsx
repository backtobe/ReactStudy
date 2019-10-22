import React, { Component } from 'react'
import './style/listItem.css'

class Item extends Component {
  constructor(props) {
    super(props)
    this.itemDelete= this.itemDelete.bind(this)
  }
  itemDelete(){
    this.props.passDelete(this.props.index)
  }
  render(){
    let {comment} = this.props
    return (
      <div className="itemself-container">
        
        <div className="item-top">
          <p>{comment.name} 说：</p>
          <button onClick={this.itemDelete}>删除</button>  
        </div>
        <div className="item-body">
          {comment.comment}
        </div>
      </div>
    )
  }
}
export default Item