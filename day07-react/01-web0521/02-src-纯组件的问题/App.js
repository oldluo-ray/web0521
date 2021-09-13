import React, { Component, PureComponent } from 'react'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}
export default class App extends PureComponent {
  state = {
    count: 0,
    // this.state.obj !== nextState.obj
    obj: {
      name: 'zs',
    },
  }
  render() {
    console.log('app渲染了')
    return (
      <>
        {/* <div>{this.state.count}</div> */}
        <div>{this.state.obj.name}</div>
        <button
          onClick={() => {
            // 注意: 以下这种书写代码的方式,如果遇到纯组件,就会导致视图无法更新.
            // 原因是: 我们直接修改了复杂数据类型里面的数据,但是纯组件判断的时候,只是浅层对比,只比较复杂数据类型是不是同一个.如果是,则认为数据没有变化,如果不是,才认为数据变化了
            // this.state.obj.name = 'ls'
            // console.log(this.state.obj)
            // this.setState({
            //   // count: getRandomIntInclusive(1, 2),
            //   obj: this.state.obj,
            // })

            // 更好的写法:
            // 1. 根据旧的数据,生成一份新的数据
            const newObj = { ...this.state.obj }
            // 2. 操作新的数据
            newObj.name = 'ls'
            // 3. 调用setState,将新的数据赋值给state的属性
            this.setState({
              obj: newObj,
            })
          }}
        >
          按钮 + 1
        </button>
      </>
    )
  }
}
