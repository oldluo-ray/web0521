import React, { Component } from 'react'
import usePosition from '../position'
import CatUrl from '../assets/cat.gif'

export default function Cat () {

    let { x, y } = usePosition()
    x += 200
    y -= 50
    return (
      <div>
        <img
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  
}
