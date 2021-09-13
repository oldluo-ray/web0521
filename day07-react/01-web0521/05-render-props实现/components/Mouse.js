import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
console.log(MouseUrl)
export default class Mouse extends Component {
  render() {
    let { x, y } = this.props
    return (
      <div>
        <img
          src={MouseUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  }
}
