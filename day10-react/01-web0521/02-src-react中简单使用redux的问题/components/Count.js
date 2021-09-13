import React from 'react'
import store from '../redux/store'
export default function Count() {
    return (
        <div>
            <h1>计数</h1>
            <div>{store.getState().count}</div>
            <button onClick={()=>{
                store.dispatch({type: 'inc', num: 1})
            }}>按钮</button>
        </div>
    )
}
