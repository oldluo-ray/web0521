import React, { useReducer } from 'react'

const initialState = { count: 0, msg: '哈哈' }

// 注意: 这里不需要给state设置默认值
// 如果一个函数组件中,状态数据较少,可以使用useState,如果数据较多,就可以使用useReducer
function reducer(state, action) {
  console.log('reducer执行了', state, action)
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
  }
}

export default function Test() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Test组件</h2>
      <div>{state.count}</div>
      <div>{state.msg}</div>
      <button
        onClick={() => {
          dispatch({ type: 'increment' })
        }}
      >
        按钮+
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' })
        }}
      >
        按钮-
      </button>
    </div>
  )
}
