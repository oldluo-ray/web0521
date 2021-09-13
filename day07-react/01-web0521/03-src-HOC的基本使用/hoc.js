import React from 'react'
// 1. 定义一个函数
// WrappedCompnent 就是未来会传进来的Login和Register组件
export default function (WrappedCompnent) {
  // 返回一个匿名类
  return class extends React.Component {
    // 在这个匿名类中,定义公共的状态和逻辑
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    handleChange = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }

    render() {
      return (
        <WrappedCompnent
          username={this.state.username}
          password={this.state.password}
          repassword={this.state.repassword}
          handleChange={this.handleChange}
        ></WrappedCompnent>
      )
    }
  }
}
