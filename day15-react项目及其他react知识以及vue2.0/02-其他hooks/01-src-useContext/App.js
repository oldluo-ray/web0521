import React from 'react'
import context from './context'
import Test from './Test'
const { Provider } = context
export default function App() {
  return (
    <Provider value={{ username: 'zs' }}>
      <h1>app</h1>
      <Test></Test>
    </Provider>
  )
}
