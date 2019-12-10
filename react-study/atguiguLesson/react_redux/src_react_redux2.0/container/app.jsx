import React from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../store/reducers/actions';
import Counter from '../components/counter'
export default connect(
  state =>({count:state}),
  {increment,decrement}
)(Counter)