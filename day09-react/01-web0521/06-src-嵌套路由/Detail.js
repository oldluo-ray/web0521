import React from 'react'
import { Link, Route } from 'react-router-dom'
import Item1 from './Item1'
import Item2 from './Item2'
export default function Detail(props) {
  return (
    <div>
      <h1>详情页</h1>
      <Link to="/detail/item1">item1</Link>
      <Link to="/detail/item2">item2</Link>

      <Route path="/detail/item1" component={Item1}></Route>
      <Route path="/detail/item2" component={Item2}></Route>
    </div>
  )
}
