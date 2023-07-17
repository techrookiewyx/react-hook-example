import { useContext, useState } from "react"
import { BasicContext } from "../useContext/context"

export function ChildrenB() {
  const [countA, setCountA] = useState(1);
  const  countContext = useContext(BasicContext);
  function subHandle() { 
    countContext.dispathch({ type: 'sub', count: +countA  });
  }
  return (
    <>
      <h5>子子组件 - {countContext.count}</h5>
      <input type='number' value={countA} onChange={e => { setCountA(e.target.value) }} /><br/>
      <button onClick={subHandle}>减{countA}</button>{" "}
    </>
  )
}