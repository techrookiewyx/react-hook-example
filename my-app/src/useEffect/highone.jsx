import { useEffect, useState } from "react"

export default function EffectHighCase() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let time = setInterval(() => {
      setCount(a=>a + 1);
    }, 1000);
    return () => {clearInterval(time)}
  }, []);
  useEffect(() => {
    document.title = `${count} - ${Math.floor(Math.random() * 100)}`;
  },[count]);
  return (
    <>
      <h2>useEffect高级用法</h2>
      <p>当组件第一次被挂载后执行一个自动累加器 setInterval，每1秒 a 的值+1</p>
      <h3>{count}</h3>
    </>
  )
}