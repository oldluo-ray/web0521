import React, { Component } from 'react'
import Far from './components/Far'
import context from './context'
export default class App extends Component {
  state = {
    money: '5毛钱',
  }
  render() {
    return (
      <context.Provider value={this.state.money}>
        <div>
          <Far></Far>
        </div>
      </context.Provider>
    )
  }
}
