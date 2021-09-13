import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()
    console.log('挂载阶段-constructor')
    this.state = {
      count: 0,
    }
  }
  render() {
    console.log('挂载阶段/更新阶段-render')
    return (
      <div>
        <div>test组件</div>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          +
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log('挂载阶段-componentDidMount')
  }
  componentDidUpdate() {
    console.log('更新阶段-componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('卸载阶段-componentWillUnmount')
  }
}
