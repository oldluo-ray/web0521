import React from 'react'

export default function Count(props) {
  return (
    <div>
      <h1>计数器</h1>
      <div>{props.count}</div>
      <button
        onClick={() => {
          props.increment()
        }}
      >
        按钮
      </button>
    </div>
  )
}
