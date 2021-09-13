// 1. 引入配置中间件的函数 
import { createStore, applyMiddleware } from "redux";
// 2. 引入某个中间件
import thunk from 'redux-thunk'
import reducer from './reducer'
// 3. 配置中间件
export default createStore(reducer, applyMiddleware(thunk))