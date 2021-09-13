import React, { useState, useEffect } from 'react'
import FancyInput from './Test'

const appRef = React.createRef()
class App extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            // console.log(appRef.current.focus())
            console.log(appRef)
          }}
        >
          按钮
        </button>
        <FancyInput ref={appRef}></FancyInput>
      </div>
    )
  }
}

export default App
