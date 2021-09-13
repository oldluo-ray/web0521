import React, { Component } from 'react'
import Test from './Test'
const testRef = React.createRef()
export default class App extends Component {
  render() {
    return (
      <div id="app">
        {/* 注意: 函数组件不能直接写ref属性 */}
        <Test xxx={testRef}></Test>
      </div>
    )
  }

  componentDidMount() {
    // ref对象绑定的如果是jsx标签,最终可以通过current访问到真实dom结构
    // ref对象绑定的如果是类组件,最终可以通过current访问到当前类组件的实例对象
    console.log(testRef)
  }
}
