import React, { Component } from 'react'
import Son1 from './Son1'
import Son2 from './Son2'
export default class Far extends Component {
  render() {
    return (
      <div>
        <h2>far组件</h2>
        <Son1></Son1>
        <Son2></Son2>
      </div>
    )
  }
}
