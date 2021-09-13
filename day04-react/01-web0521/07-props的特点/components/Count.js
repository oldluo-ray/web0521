import React, { Component } from 'react'

// 注意: 只有类组件才能定义状态(数据)
// props的三个特点:
// 1. 可以用来传递任何类型的数据
// 2. props的数据是只读的,不要修改, 但是react底层是浅层对比.
// 3. 构造器中默认通过this.props拿不到数据,需要在构造器中接收props,并且传递给super才可以
export default class Count extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    // render体中的this,一定指向当前组件的实例
    // console.log(this.props)
    const Test = this.props.test
    // this.props.xxx = 123
    // 注意: 虽然说props是只读的.但是如果修改的是复杂数据类型里面的数据,react不会发现
    this.props.obj.name = 'ls'
    return (
      <div>
        <h1>计数器案例</h1>
        <Test></Test>
        <div id="count">{this.props.xxx}</div>
        <div id="count">{this.props.obj.name}</div>
      </div>
    )
  }
}
