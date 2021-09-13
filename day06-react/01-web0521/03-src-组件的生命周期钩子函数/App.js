import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  state = {
    count: 1,
  }
  render() {
    return (
      <div>
        {this.state.count && <Test></Test>}
        <button
          onClick={() => {
            this.setState({
              count: 0,
            })
          }}
        >
          按钮,点击隐藏Test
        </button>
      </div>
    )
  }
}
