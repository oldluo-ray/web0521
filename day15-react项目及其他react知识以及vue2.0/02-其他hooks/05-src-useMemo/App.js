import React, { useState, useMemo } from 'react'

export default function WithoutMemo() {
  const [count, setCount] = useState(1)
  const [val, setValue] = useState('')
  // 不使用useMemo. 这个函数不需要重新计算的时候,也会调用了
  // function expensive() {
  //   console.log('compute')
  //   let sum = 0
  //   for (let i = 0; i < count * 100; i++) {
  //     sum += i
  //   }
  //   return sum
  // }
  // 使用了useMemo.会缓存计算的结果,如果依赖值变化,就重新计算,如果依赖值没有变化,就不会重新计算
  const expensive = useMemo(() => {
    console.log('compute')
    let sum = 0
    for (let i = 0; i < count * 100; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h4>
        {count}-{val}-{expensive}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  )
}
