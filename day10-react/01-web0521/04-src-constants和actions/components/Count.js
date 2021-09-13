import React from 'react'
import { incCreator, decCreator } from '../redux/actions';

// 展示组件
export default function Count(props) {
     console.log(props);
    return (
        <div>
            <h1>计数</h1>
            <div>{props.count}</div>
            <button onClick={()=>{
                    props.inc(incCreator(5))
            }}>按钮+</button>
            <button onClick={()=>{
                    props.dec(decCreator(2))
            }}>按钮-</button>
        </div>
    )
}

