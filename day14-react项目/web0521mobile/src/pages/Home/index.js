import React from 'react'
import './index.css'
export default function index(props) {
    const {avatar} = props.location.state;
    return (
        <div>
            <h1>home组件</h1>
            <img src={avatar} alt="" />
        </div>
    )
}
