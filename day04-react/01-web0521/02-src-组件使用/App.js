import React, { Component } from 'react'
import Count from './Count'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        {/* jsx中的注释: 组件在哪里使用,组件对应的结构就渲染到哪里  */}
        <Count></Count>
      </div>
    )
  }
}
