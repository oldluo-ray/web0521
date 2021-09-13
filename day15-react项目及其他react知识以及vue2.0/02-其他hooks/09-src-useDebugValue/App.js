import React from 'react'
import useTest from './useTest'
export default function App() {
  const isOnline = useTest()
  return <div>{isOnline}</div>
}
