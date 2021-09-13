import React from 'react'
import PubSub from 'pubsub-js'
import './Item.css'
export default function Item(props) {
  const { todo } = props
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            PubSub.publish('update', todo.id)
          }}
        />
        <span className={todo.isDone ? 'active' : ''}>{todo.todoName}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          PubSub.publish('delete', todo.id)
        }}
      >
        删除
      </button>
    </li>
  )
}
