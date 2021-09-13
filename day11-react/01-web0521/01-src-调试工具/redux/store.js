// 1. 引入配置中间件的函数
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 2. 引入某个中间件
import thunk from 'redux-thunk'
import reducer from './reducer'
// 3. 配置中间件
// 推荐方式: 使用composeWithDevTools(applyMiddleware(中间件)), 既可以使用中间件,又可以使用调试工具
// console.log(process.env.NODE_ENV);
const dev = process.env.NODE_ENV
export default createStore(
  reducer,
  //    注意: 第二参数,也可以初始化redux中的数据,而且优先级更高.但是一般不用.因为实际开发都是协作开发,每一个程序员要写自己的reducer函数,要定义跟自己写的功能相关的数据,所以不希望所有人都操作这个store.js
  //   {
  //     list: [1, 2, 3],

  //   },
  // 判断一下,是否是开发环境,如果是开发环境就使用compose..., 如果不是,就不使用调试工具
  dev === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
