import { useEffect, useRef, useState } from "react";

export default function RefCaseTwo() {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  useEffect(() => { 
    timerRef.current = setInterval(() => {
      setTime(a => a + 1);
    }, 1000);
    return () => {clearInterval(timerRef.current)}
  },[])
  return (
    <>
      <h2>useRef使用案例2</h2>
      <h3>若我们有一个组件，组件中有一个变量count，当该组件挂载到网页后，count每秒自动 +1，组件中有一个按钮，点击按钮可以停止count自动+1。</h3>
      <h4>{time}</h4>
      <button onClick={() => { clearInterval(timerRef.current)}}>停止</button>
    </>
  )
}