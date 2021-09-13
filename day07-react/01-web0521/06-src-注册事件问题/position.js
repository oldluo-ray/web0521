import React from 'react'
// 1. 直接定义一个组件,这个组件中,定义公共的状态和逻辑
export default class Position extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

  handleMove = (e) => {
    // console.log(e)
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
    // window.onmousemove = (e) => {
    //   this.setState({
    //     x: e.clientX,
    //     y: e.clientY,
    //   })
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
    // window.onmousemove = null
  }

  render() {
    return this.props.children(this.state)
  }
}
