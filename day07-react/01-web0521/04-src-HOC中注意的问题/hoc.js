import React from 'react'
// 1. 定义一个函数
// WrappedCompnent 就是未来会传进来的Login和Register组件
export default function (WrappedCompnent) {
  // 返回一个匿名类
  // 调试工具中,组件名展示,默认是由定义组件时,命名为主
  // react dev tools这个调试工具,优先展示组件的静态属性displayName,如果没有就展示静态属性name
  return class extends React.Component {
    static displayName = 'With' + WrappedCompnent.name
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
          // username={this.state.username}
          // password={this.state.password}
          // repassword={this.state.repassword}
          {...this.state}
          {...this.props}
          handleChange={this.handleChange}
        ></WrappedCompnent>
      )
    }
  }
}
