import React, { Component } from 'react'

// 注意: 只有类组件才能定义状态(数据)
// export default class Count extends Component {
//   render() {
//     // render体中的this,一定指向当前组件的实例
//     // console.log(this)
//     return (
//       <div>
//         <h1>计数器案例</h1>
//         <div id="count">{this.props.xxx}</div>
//       </div>
//     )
//   }
// }

// 如果是函数组件,函数组件中没有this,所以是通过形参接收props对象
export default function Count(props) {
  console.log(props)
  return (
    <div>
      <h1>计数器案例</h1>
      <div id="count">{props.xxx}</div>
    </div>
  )
}
