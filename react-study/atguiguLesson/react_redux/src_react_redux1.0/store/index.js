import { createStore } from 'redux';

import { counter } from './reducers/reducers'; // 引入counter来进行管理

export const store = createStore(counter); // 内部会第一次调用reducer函数得到初始state
