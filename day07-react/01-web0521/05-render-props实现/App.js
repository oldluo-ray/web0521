import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Mouse></Mouse>
        <Cat></Cat> */}
        {/* <Position render={(pos) => <Mouse {...pos}></Mouse>}></Position>
        <Position render={(pos) => <Cat {...pos}></Cat>}></Position> */}
        <Position>{(pos) => <Mouse {...pos}></Mouse>}</Position>
        <Position>{(pos) => <Cat {...pos}></Cat>}</Position>
      </div>
    )
  }
}
