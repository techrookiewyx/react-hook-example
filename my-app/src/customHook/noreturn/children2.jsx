import { useState } from "react"
import { useDocTitle } from "./useDocTitle";

export function NoReturnChild2() {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <div>
      <h4>我是子组件2，我的count值为:{count}</h4>
      <button onClick={() => {setCount(Math.floor(Math.random()*1000))}}>修改count</button>
    </div>
  )
}