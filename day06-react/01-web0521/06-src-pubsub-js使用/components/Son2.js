import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son2 extends Component {
  render() {
    return (
      <div>
        <div>Son2</div>
        <button
          onClick={() => {
            // PubSub.publish('话题', 数据)
            PubSub.publish('news', '程序员是新生代农名工')
          }}
        >
          发布信息news
        </button>
        <button
          onClick={() => {
            // PubSub.publish('话题', 数据)
            PubSub.publish('flower', 'rose')
          }}
        >
          发布信息flower
        </button>
      </div>
    )
  }
}
