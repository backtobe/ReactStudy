import React, { Component } from 'react'
import Add from './add.jsx'
import List from './listItem'

class App extends Component {
  render(){
    return (
      <div>
        <h2 className="title">请发表对React的评论</h2>
        <div className="body">
          <div className="left">
            <Add />
          </div>
        </div>
        <div className="right">
          <List />
        </div>
      </div>
    )
  }
}
export default App