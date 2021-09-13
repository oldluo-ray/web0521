// import React, { Component } from 'react'

// export default class Test extends Component {
//   render() {
//     return <div>test组件</div>
//   }
// }
import React from 'react'

export default function Test(props) {
  return <div ref={props.xxx}>test组件</div>
}

// export const Test = React.forwardRef((props, ref) => {
//   return <div ref={ref}>test组件</div>
// })
