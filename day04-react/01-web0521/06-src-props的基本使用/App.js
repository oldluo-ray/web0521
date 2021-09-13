import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  state = { count: 99 }
  handle = () => {
    // 1. 当前组件中调用setState,就只能修改当前组件的数据,和其他组件无关
    // 2. 调用setState,会导致当前组件的render函数被重新调用
    // 3. render函数被调用的时候,render中获取的数据一定是最新的
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div id="app">
        <Count xxx={this.state.count}></Count>
        {/* <Count xxx={0}></Count> */}
        <button onClick={this.handle}>按钮+1</button>
      </div>
    )
  }
}
