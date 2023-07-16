import { useEffect, useState } from "react"

export default function EffectBasicCase() {
  const [count, setCount] = useState(0);
  useEffect(() => { 
    document.title = `${count} - ${Math.floor(Math.random() * 100)}`;
  })
  const clickHandle = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h2>useEffect基础用法</h2>
      <p>当组件第一次被挂载后或组件重新渲染后，将网页标题显示为如下的值</p>
      <h3>{count}</h3>
      <button onClick={clickHandle}>点我加一</button>
    </>
  )
}