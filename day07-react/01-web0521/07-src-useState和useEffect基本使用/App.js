import React, { useState, useEffect } from 'react'
import Test from './Test'
export default function App() {
  // console.log('app函数组件里面的代码被解析了')
  // const [状态值, 修改状态的方法] = useState(状态的初始值)
  const [count, setCount] = useState(1)

  // useEffect外层函数,模拟了挂载和更新两个生命周期钩子
  // 注意:
  // 1. 不传第二个参数: 就表示外层模拟挂载和更新, 内部模拟卸载
  // 2. 传第二个参数,是一个空数组: 就表示外层只模拟挂载, 内部模拟卸载
  // 3. 数组中传入了props或state中的某个数据,如果传入到数组中的数据发生变化了,外层函数就模拟更新,如果传入数组的数据没有变化,则不模拟更新
  useEffect(() => {
    // 内部这个函数,模拟了卸载的钩子
    console.log('组件挂载了/ 组件更新了')
    return () => {
      console.log('组件即将卸载了')
    }
  }, [count])

  function handle(e) {
    setCount(0)
    // setMsg('world')
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={handle}>按钮</button>
    </>
  )
}
