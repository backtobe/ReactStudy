import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from './listItem'
import './style/list.css'

class List extends Component {
  static propTypes = {
    comments:PropTypes.array.isRequired
  }
  passDelete = index => {
    this.props.deleteComment(index)
  }
  render(){
    let {comments} = this.props
    let style = {display: comments.length?'none':'block'}
    return (
      <div className="list-container">
        
        <h3>评论回复：</h3>
        <div className="item-container">
          <div className="no-comment" style={style}>暂无评论</div>
          {
            comments.map((comment,index) => {
              return <Item comment={ comment } key={ index } passDelete={this.passDelete} index={ index }/>
            })
          }
          
        </div>   
      </div>
    )
  }
}
export default List