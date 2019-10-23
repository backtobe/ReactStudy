import React, { Component } from 'react'
import './style/app.css'
import Add from './add.jsx'
import List from './list'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments:[
        {name:'张三',comment:'React真不错！'},
        {name:'李四',comment:'React有点意思！'}
      ]
    }
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }
  addComment(comment){
    let {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }
  deleteComment(index){
    let {comments} = this.state
    comments.splice(index,1)
    this.setState({comments})
  }
  render(){
    let { comments } = this.state;
    return (
      <div className="app-container">
        <div className="app-top">
          <h1 className="title">请发表对React的评论</h1>
        </div>
        <div className="body">
          <div className="left">
            <Add comments={ comments } addComment={ this.addComment }/>
          </div>
          <div className="right">
            <List comments={ comments } deleteComment={ this.deleteComment }/>
          </div>
        </div>
      </div>
    )
  }
}
export default App