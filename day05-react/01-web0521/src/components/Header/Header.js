import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }
  handle = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }
  enterHandle = (e) => {
    if (e.keyCode === 13) {
      if (!this.state.todoName) return
      // 要将Header组件中的todoName,传递给App组件
      this.props.addTodo(this.state.todoName)
      // 清空文本框
      this.setState({
        todoName: '',
      })
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.todoName}
          onChange={this.handle}
          onKeyUp={this.enterHandle}
        />
      </div>
    )
  }
}
