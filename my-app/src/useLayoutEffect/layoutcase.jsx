import { useEffect, useLayoutEffect, useState } from "react"

export function LayoutEffectCase() { 
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log('layout重新执行');
  });
  useEffect(() => {
    console.log('effect重新执行');
  });
  return (
    <>
      <h2>useLayoutEffect案例</h2>
      <h4>{count}</h4>
      <button onClick={() => {setCount(count+1)}}>加一</button>
    </>
  )
}