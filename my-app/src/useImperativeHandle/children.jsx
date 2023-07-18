import { useImperativeHandle, useState, forwardRef } from "react"

export const ChildrenBtn = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => { 
    return {addCount}
  });
  function addCount() { 
    setCount(count + 1);
  }
  return (
    <>
      <p>子组件中count：{count}</p>
      <button onClick={addCount}>{props.content}</button>
    </>
  )
})