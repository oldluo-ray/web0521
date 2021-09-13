import React, { Component } from 'react'
import Count from './components/Count'
import List from './components/List'
export default class App extends Component {
  state = { count: 99, list: [{ name: 'zs' }, { name: 'ls' }] }
  handle = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div id="app">
        <List></List>
        <Count xxx={this.state.count}></Count>
        <button onClick={this.handle}>按钮+1</button>
      </div>
    )
  }
}
