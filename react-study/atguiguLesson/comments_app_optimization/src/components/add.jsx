import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './style/add.css'

class Add extends Component {
  static propTypes = {
    addComment:PropTypes.func.isRequired,
  }
  add = () =>{
    let name = this.name.value.trim()
    let comment = this.comment.value.trim()
    if(!name || !comment){
      alert('用户名及评论内容不能为空')
      return
    }
    this.name.value = ''
    this.comment.value = ''
    let obj = {name,comment}
    this.props.addComment(obj)
  }
  render(){
    return (
      <div className="add-container">
        <div className="user-name">
          <p className="user-name-text">用户名</p>
          <input type="text" className="user-name-input" ref={input => this.name = input}/>  
        </div>
        <div className="comment">
          <p className="comment-text">评论内容</p>
          <textarea className="comment-content" ref={input => this.comment = input} required/>
        </div>
        <div className="submit-btn">
          <button onClick={this.add}>提交</button>
        </div>
      </div>
    )
  }
}
export default Add