import axios from 'axios'
import { SAVE_LIST } from './constants'

// 只负责返回一个action对象的actionCreator,我们又称为同步action
export function saveListCreator(list) {
  return { type: SAVE_LIST, list }
}
// 要负责发送异步请求的actionCreator,称为异步action
export function saveListCreatorAsync(list) {
  // 当在展示组件中,调用了saveListCreatorAsync这个函数之后,由于redux-thunk这个中间件的存在,实际上,我们下面return的这个函数会被调用.这个函数调用了,就会发送异步请求,请求成功过之后,调用dispatch,触发reducer函数,修改redux中list的数据
  return async (dispatch) => {
    //发送异步请求
    const result = await axios({
      url: '/getUsers',
    })
    // console.log(result.data)
    dispatch(saveListCreator(result.data))
  }
}
