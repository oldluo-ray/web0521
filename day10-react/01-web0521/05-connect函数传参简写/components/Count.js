import React from 'react'

// 展示组件
export default function Count(props) {
     console.log(props);
    return (
        <div>
            <h1>计数</h1>
            <div>{props.count}</div>
            <button onClick={()=>{
                    props.incCreator(5)
            }}>按钮+</button>
            <button onClick={()=>{
                    props.decCreator(2)
            }}>按钮-</button>
        </div>
    )
}

