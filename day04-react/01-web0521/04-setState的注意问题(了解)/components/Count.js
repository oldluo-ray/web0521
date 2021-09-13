import React, { Component } from 'react'

// 注意: 只有类组件才能定义状态(数据)
export default class Count extends Component {
  constructor() {
    super()
    // 定义状态
    this.state = {
      count: 0,
      msg: 'test',
    }
  }
  render() {
    // render体中的this,一定指向当前组件的实例
    return (
      <div>
        <h1>计数器案例</h1>
        <div id="count">{this.state.count}</div>
        <div>{this.state.msg}</div>

        <button
          onClick={() => {
            // this.setState({
            //   // 修改谁,就写谁,不用考虑其他数据
            //   count: this.state.count + 1,
            // })
            // 注意: 修改state的行为会被推到队列中执行,所以调用setStaet之后,立刻输出数据,其实看到的还是原来的数据
            // console.log(this.state.count)
            // 如果多次连续调用setState会合并执行
            // this.setState({
            //   count: this.state.count + 1,
            //   msg: '哈哈哈',
            // })
            // this.setState({
            //   count: this.state.count + 2,
            // })
            // this.setState({
            //   count: this.state.count + 3,
            // })
            // 合并之后:
            // this.setState({
            //   count: this.state.count + 3,
            //   mag: '哈哈哈',
            // })

            // setState传参的其他方式:
            // 第一个参数是回调函数,当这个state被修改完毕之后,这个回调函数才会执行
            // this.setState((state) => {
            //   // state是最新的state
            //   console.log('第一个state', state)
            //   return {
            //     count: state.count + 1,
            //   }
            // })
            // this.setState((state) => {
            //   // state是最新的state
            //   console.log('第二个state', state)
            //   return {
            //     count: state.count + 2,
            //   }
            // })
            // this.setState((state) => {
            //   console.log('第三个state', state)
            //   // state是最新的state
            //   return {
            //     count: state.count + 3,
            //   }
            // })

            // setState的第二个参数
            // 第二个回调函数,什么时候被调用
            // this.setState({}, () => {})
            this.setState(
              (state) => {
                return {
                  count: state.count + 1,
                }
              }, // 数据变化调用
              () => {
                //可以获取最新的数据和最新的dom结构
                console.log(this.state.count)
                console.log(document.getElementById('count'))
              } // 是数据以及视图都改变了,才调用
            )
          }}
        >
          按钮+1
        </button>
      </div>
    )
  }
}
