import React, { Component } from 'react';

import {INCREMENT,DECREMENT} from '../store/reducers/action-types'

class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    const value = this.select.value
    this.props.store.dispatch({type:INCREMENT,data:+value})
  }
  decrement = () => {
    const value = this.select.value
    this.props.store.dispatch({type:DECREMENT,data:+value})
  }
  incrementIfOdd = () => {
    const count = this.props.store.getState()
    if(count %2){
      return
    }
    const value = this.select.value
    this.props.store.dispatch({type:INCREMENT,data:+value})
  }
  incrementAsync = () => {
    const value = this.select.value
    setTimeout( () => {
      this.props.store.dispatch({type:INCREMENT,data:+value})
    },1000)
  }
  incrementAsync
  render() {
    const count = this.props.store.getState()
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          &nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    );
  }
}
export default App;
