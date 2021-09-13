import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    msg: 'test',
  }
  render() {
    return <div>{this.state.msg}</div>
  }
}
