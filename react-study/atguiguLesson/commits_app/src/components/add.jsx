import React, { Component } from 'react'

class Add extends Component {
  render(){
    return (
      <div>
        <div className="user-name">
          <p className="user-name-text">用户名</p>
          <input type="text" className="user-name-input"/>  
        </div>
        <div className="comment">
          <p className="comment-text">评论内容</p>
          <textarea className="comment-content"/>
        </div>
      </div>
    )
  }
}
export default Add