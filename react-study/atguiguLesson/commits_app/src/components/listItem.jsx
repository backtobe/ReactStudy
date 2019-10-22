import React, { Component } from 'react'

class Item extends Component {
  render(){
    return (
      <div>
        <div className="item-top">
          <p>xxx 说：</p>
          <button>删除</button>  
        </div>
        <div className="item-body">
          React真不错
        </div>
      </div>
    )
  }
}
export default Item