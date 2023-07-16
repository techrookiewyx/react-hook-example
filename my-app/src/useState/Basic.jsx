import { useState } from "react"

export default function StateBasicCase() {
  const [count, setCount] = useState(0);
  const clickHandle = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h2>useState基础用法</h2>
      <p>练习:用useState实现一个计数器，默认为0，每次点击+1。</p>
      <h3>{count}</h3>
      <button onClick={clickHandle}>点我加一</button>
    </>
  )
}