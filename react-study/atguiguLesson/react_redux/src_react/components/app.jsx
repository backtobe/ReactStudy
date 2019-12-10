import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    const value = this.select.value
    let { count } = this.state
    count += +value
    this.setState({count})
  }
  decrement = () => {
    const value = this.select.value
    let { count } = this.state
    count -= +value
    this.setState({count})
  }
  incrementIfOdd = () => {
    let { count } = this.state
    if(count %2){
      return
    }
    const value = this.select.value
    count += +value
    this.setState({count})
  }
  incrementAsync = () => {
    let { count } = this.state
    const value = this.select.value
    count += +value
    setTimeout( () => {
      this.setState({count})
    },1000)
  }
  incrementAsync
  render() {
    const { count } = this.state
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
