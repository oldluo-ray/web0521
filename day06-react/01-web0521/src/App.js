import React, { Component } from 'react'
import Son from './Son'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}
export default class App extends Component {
  state = {
    count: 0,
  }
  render() {
    console.log('app渲染了')
    return (
      <>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: getRandomIntInclusive(1, 2),
            })
          }}
        >
          按钮 + 1
        </button>
        <Son count={this.state.count}></Son>
      </>
    )
  }
}
