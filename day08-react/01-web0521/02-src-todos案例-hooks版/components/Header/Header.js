import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header() {
  const [todoName, setTodoName] = useState('')

  function handle(e) {
    setTodoName(e.target.value.trim())
  }

  function keyUpHandle(e) {
    if (!todoName) return
    if (e.keyCode !== 13) return
    // 传递todoName给App组件
    PubSub.publish('add', todoName)
    setTodoName('')
  }
  return (
    <div className="todo-header">
      <input
        type="text"
        value={todoName}
        onChange={handle}
        onKeyUp={keyUpHandle}
      />
    </div>
  )
}
