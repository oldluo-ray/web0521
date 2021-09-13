import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>app</h1>
        {/* 组件在哪里使用,组件的结构就渲染到哪里 */}
        <Test></Test>
        <p>测试文本</p>
      </div>
    )
  }
}
