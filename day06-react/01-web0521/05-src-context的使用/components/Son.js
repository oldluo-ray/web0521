import React, { Component } from 'react'
import context from '../context'
// 方式一:
// export default class Son extends Component {
//   render() {
//     // return <div></div>
//     return <context.Consumer>{(data) => <div>{data}</div>}</context.Consumer>
//   }
// }
// 方式二:
export default class Son extends Component {
  static contextType = context
  render() {
    // console.log(this.context)
    return <div>{this.context}</div>
  }
}
