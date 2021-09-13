import React, { useEffect } from 'react'

export default function Test() {
  useEffect(() => {
    console.log('test组件挂载了')
    return () => {
      console.log('test组件即将被卸载了')
    }
  })
  return <div>test</div>
}
