// 使用redux
// 1. 下载包 redux
// 2. 引入
import { createStore } from 'redux'
// 3. 创建store对象
// 为了创建store,要先定义reducer函数
// reducer函数的执行时机:
// 1. createStore的时候,调用一次,目的是为了初始化数据
// 2. 当执行了store.dispatch的时候,reducer函数就会被调用
const initState = {
  count: 0,
  msg: '哈哈哈',
}
// 注意: reducer函数应该是一个纯函数,不要再里面写异步操作
function reducer(state = initState, action) {
  console.log('reducer被调用了', state, action)
  
  // state 就是redux中存储的所有的数据
  // action 就是需求对象,里面描述了某个需求的类型
  // 注意: reducer函数中每次执行的时候,return的是什么,redux中数据就被修改成什么
  switch (action.type) {
    case 'inc':
        return {
          ...state,
          // count: 0,
          // msg:'hahaha'
          count: state.count + action.xxx,
        }
  
    case 'dec':
      return {
        ...state,
        count: state.count - action.yyy,
      }

    case 'ride':
      return {
        ...state,
        count: state.count * action.zzz,
      }
    default:
      return state
  }
}
// 注意: 创建store对象,需要传入reducer函数
const store = createStore(reducer)

// 可以返回store对象中的state的数据
console.log(store.getState())

//监听store中数据的变化,要先监听,后修改
store.subscribe(()=>{
  // 只要数据变化,这个函数就会被调用
  console.log(store.getState());
})

// 修改数据
//  注意: action对象,type属性必须有,值必须是字符串. 但是其他属性,可以根据具体情况随意决定
store.dispatch({ type: 'inc', xxx: 1 })
// console.log(store.getState())
store.dispatch({ type: 'ride' , zzz: 7})
// console.log(store.getState())
store.dispatch({ type: 'dec', yyy: 2 })
// console.log(store.getState())
// store.dispatch({ type: 'inc' })
// console.log(store.getState())
// store.dispatch({ type: 'inc' })
// console.log(store.getState())
