import { createStore, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { counter } from './reducers/reducers'; // 引入counter来进行管理

export const store = createStore(counter,composeWithDevTools(applyMiddleware(thunk))); // 内部会第一次调用reducer函数得到初始state
