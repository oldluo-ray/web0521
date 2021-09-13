import React, { Component, PureComponent } from 'react'
// 纯组件和Component的功能基本相似. 但是纯组件,还帮助开发者,重写了shouldComponentUpdate. 帮助我们判断了所有props和state数据
export default class Son extends PureComponent {
  state = {
    msg: '还有一点点就不讲了',
  }
  render() {
    console.log('son组件渲染了')
    return (
      <>
        <div>Son</div>
        <div>{this.props.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            this.setState({
              msg: '马上就说完了',
            })
          }}
        >
          son按钮
        </button>
      </>
    )
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('son组件中shouldComponentUpdate执行了')
  //   // 当组件进行更新阶段的时候,会触发这个函数
  //   // 返回true,就会重新渲染
  //   // 返回false,就不会重新渲染
  //   // 第一种情况: 组件只写了一些结构,没有动态数据,直接return false, 组件永远不会重新渲染
  //   // return false
  //   // 第二种情况: 父组件通过props传递过来的数据,如果和上一次相同,不应该重新渲染,如果不同,应该重新渲染
  //   // 注意: 在shouldComponentUpdate里面this.props是上一次的props数据.其他的钩子函数this.props一定是最新的
  //   // 新数据就是接收到的nextProps
  //   // console.log('旧', this.props)
  //   // console.log('新', nextProps)
  //   // if (this.props.count === nextProps.count) {
  //   //   return false
  //   // } else {
  //   //   return true
  //   // }
  //   // 注意: 三元中不能写return
  //   // this.props.count === nextProps.count ? return false : return true
  //   // return this.props.count === nextProps.count ? false : true
  //   // 第三种情况: props和state都存在的情况下,需要将这两个方面的数据都考虑到

  //   if (
  //     this.state.msg !== nextState.msg ||
  //     this.props.count !== nextProps.count
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}
