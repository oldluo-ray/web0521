import React, { useRef, useImperativeHandle, forwardRef } from 'react'
// 形参接收的ref是app里面传过来的ref对象
// inputRef 是FancyInput组件中的ref对象
function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
  }))
  return <input ref={inputRef} />
}
FancyInput = forwardRef(FancyInput)
export default FancyInput
