import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(props) {
  return (
    <div>
      首页
      <Link to="/detail/2/20">detail</Link>
      {/* <button
        onClick={() => {
          // 注意: 当前Home组件,是被Route管理的组件,所以history,location,match都可以通过props获取到
          // console.log(props)
          props.history.push('/detail', { from: '/home' })
          // props.history.replace('/detail/1/10', { from: '/home' })
        }}
      >
        按钮
      </button> */}
    </div>
  )
}
