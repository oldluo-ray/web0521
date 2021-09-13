import React, { useContext } from 'react'
import context from './context'
export default function Test() {
  const value = useContext(context)
  console.log(value)
  return <div>{value.username}</div>
}
