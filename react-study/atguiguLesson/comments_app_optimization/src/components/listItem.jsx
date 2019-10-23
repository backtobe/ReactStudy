import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './style/listItem.css'

class Item extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    passDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
  itemDelete = () => {
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