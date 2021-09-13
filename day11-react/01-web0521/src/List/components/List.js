import React from 'react'

export default function List(props) {
  console.log(props)
  function handle() {
    props.saveListCreatorAsync()
  }
  return (
    <div>
      <button onClick={handle}>点击获取数据</button>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
