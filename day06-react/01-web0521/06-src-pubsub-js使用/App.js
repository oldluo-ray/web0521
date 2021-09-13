import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import Far from './components/Far'
export default class App extends Component {
  state = {
    money: '5毛钱',
  }
  componentDidMount() {
    this.token1 = PubSub.subscribe('news', (msg, data) => {
      console.log('app', msg, data)
    })
    this.token2 = PubSub.subscribe('flower', (msg, data) => {
      console.log('app', msg, data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token1)
    PubSub.unsubscribe(this.token2)
  }

  render() {
    return (
      <div>
        <h1>app根组件</h1>
        <button
          onClick={() => {
            // 清除指定的某一个订阅
            PubSub.unsubscribe(this.token)
          }}
        >
          按钮1
        </button>
        <button
          onClick={() => {
            // 清除news话题的所有订阅
            PubSub.unsubscribe('news')
          }}
        >
          按钮2
        </button>
        <button
          onClick={() => {
            // 清除所有的订阅
            PubSub.clearAllSubscriptions()
          }}
        >
          按钮3
        </button>
        <Far></Far>
      </div>
    )
  }
}
