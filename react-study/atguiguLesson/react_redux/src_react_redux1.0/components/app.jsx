import React, { Component } from 'react';
import PropTypes from 'prop-types' 
import { connect } from 'react-redux'

import { increment, decrement } from '../store/reducers/actions';

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    decrement:PropTypes.func.isRequired,
    increment:PropTypes.func.isRequired,
  }
  increment = () => {
    const value = this.select.value;
    this.props.increment(+value)
  };
  decrement = () => {
    const value = this.select.value;
    this.props.decrement(+value)

  };
  incrementIfOdd = () => {
    const {count} = this.props;
    if (count % 2) {
      return;
    }
    const value = this.select.value;
    this.props.increment(+value)
  };
  incrementAsync = () => {
    const value = this.select.value;
    setTimeout(() => {
      this.props.increment(+value)
    }, 1000);
  };
  render() {
    const {count} = this.props;
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => (this.select = select)}>
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
export default connect(
  state =>({count:state}),
  {increment,decrement}
)(App);
(state) => {
  return ({count: state})
}