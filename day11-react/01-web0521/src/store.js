import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import listReducer from './List/redux/reducer'
import countReducer from './Count/redux/reducer'

// 合并多个reducer函数
const rootReducer = combineReducers({
  x: listReducer,
  y: countReducer,
})

const dev = process.env.NODE_ENV
// 注意: 如果协作开发,就一定会有多个reducer函数,要将多个reducer函数,合并成一个reducer,然后将合并后的reducer,传入到createStore里面
export default createStore(
  rootReducer,
  dev === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
