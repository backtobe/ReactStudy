import React, { Component } from 'react'
import Item from './listItem'
import './style/list.css'
class List extends Component {
  constructor(props) {
    super(props)
    this.passDelete = this.passDelete.bind(this)
  }
  passDelete(index){
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