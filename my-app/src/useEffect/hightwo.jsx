import { useEffect, useState } from "react"

export default function EffectHighTwo() {
  const [count, setCount] = useState({a:0,b:0});
  useEffect(() => {
    document.title = `${count.a} - ${Math.floor(Math.random() * 100)}`;
  },[count.a]);
  return (
    <>
      <h2>useEffect高级用法</h2>
      <p>若一个组件中有一个自定义变量obj，obj有两个属性a、b，当a发生变化时，网页标题也跟着a发生变化</p>
      <h3>a:{count.a} {" "} b:{count.b}</h3>
      <button onClick={() => { setCount({...count,a:count.a+1})}}>点我a+1</button>{" "}
      <button onClick={() => { setCount({...count,b:count.b+1})}}>点我b+1</button>{" "}
    </>
  )
}