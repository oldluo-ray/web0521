import React from 'react'
import { Provider } from 'react-redux'
import WithList from './List/constainer/WithList'
import WithCount from './Count/container/WithCount'
import store from './store'
export default function App() {
  return (
    <Provider store={store}>
      <WithList></WithList>
      <hr />
      <WithCount></WithCount>
    </Provider>
  )
}
