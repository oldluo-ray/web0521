import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { item, updateTodo } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => {
              updateTodo(item.id)
            }}
          />
          <span className={item.isDone ? 'active' : ''}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }
}
