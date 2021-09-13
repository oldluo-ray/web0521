import React, { useState } from 'react'

export default function App() {
  const [arr, setArr] = useState(['a', 'b', 'c'])

  function handle(e) {
    const value = e.target.value.trim()
    if (e.keyCode === 13) {
      let newArr = [...arr]
      newArr.unshift(value)
      setArr(newArr)
    }
  }
  return (
    <div>
      <input type="text" onKeyUp={handle} />
      <ul>
        {arr.map((item, index) => (
          <li key={item}>
            <div>{item}</div>
            <input type="text" />
          </li>
        ))}
      </ul>
    </div>
  )
}
