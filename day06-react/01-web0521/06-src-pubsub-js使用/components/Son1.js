import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son1 extends Component {
  componentDidMount() {
    PubSub.subscribe('news', (msg, data) => {
      console.log('son1', msg, data)
    })
  }
  render() {
    return <div>Son1</div>
  }
}
