import { useState } from "react"

export default function StateHighOne() {
  const initCount = 0;
  const [count, setCount] = useState(initCount);
  function clickHandle(){
    for (let i = 0; i < 3; i++) { 
      setCount(prev => prev + 1);
    }
  }
  return (
    <div>
      <h2>useState高级用法</h2>
      <p>实现一个计数器，有3个按钮，点击后分别实现：恢复默认值、点击+1、点击-1</p>
      <h3>{count}</h3>
      <button onClick={() => {setCount(initCount)}}>恢复初始值</button>{" "}
      <button onClick={() => {setCount(count+1)}}>加一</button>{" "}
      <button onClick={() => {setCount(count-1)}}>减一</button>{" "}
      <button onClick={clickHandle}>加三</button>
    </div>
  )
}
