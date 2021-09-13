import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
        <h1>计数器案例</h1>
        <div id="count">{this.props.xxx}</div>
      </div>
    )
  }
}
