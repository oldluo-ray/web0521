import React, { Component } from 'react'

// 注意: 只有类组件才能定义状态(数据)
export default class Count extends Component {
  // constructor() {
  //   super()
  //   // 定义状态
  //   this.state = {
  //     count: 0,
  //     msg: 'test',
  //   }
  //   // 第二种解决方案: react官网提供的解决方案. 其实就是给组件实例添加方法,添加的方法中的this是固定指向组件实例的
  //   // this.handle = this.handle.bind(this)
  // }

  state = { count: 0, msg: 'test' }

  // this指向问题的第三种方式: 通过es7新的语法,可以直接将函数添加到实例上.导致底层调用函数的时候,必须先找到实例,然后调用.这就变成对象调用模式了.所以函数里面的this依然指向count实例
  handle = () => {
    // console.log(this)
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    // render体中的this,一定指向当前组件的实例
    return (
      <div>
        <h1>计数器案例</h1>
        <div id="count">{this.state.count}</div>
        <div>{this.state.msg}</div>
        {/* 解决方式一: 写一个箭头函数,当做事件处理函数.在事件处理函数中手动调用handle方法(对象调用模式) */}
        {/* <button
          onClick={() => {
            this.handle()
          }}
        >
          按钮+1
        </button> */}
        <button onClick={this.handle}>按钮+1</button>
      </div>
    )
  }
}
