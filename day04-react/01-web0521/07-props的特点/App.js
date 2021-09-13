import React, { Component } from 'react'
import Count from './components/Count'
import Test from './components/Test'
export default class App extends Component {
  state = { count: 99 }
  handle = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div id="app">
        <Count xxx={this.state.count} test={Test} obj={{ name: 'zs' }}></Count>
        <button onClick={this.handle}>按钮+1</button>
      </div>
    )
  }
}
