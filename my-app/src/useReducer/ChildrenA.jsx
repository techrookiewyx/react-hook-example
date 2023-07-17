import { useContext, useState } from "react"
import { BasicContext } from "../useContext/context"
import { ChildrenB } from "./ChildrenB";

export function ChildrenA() {
  const [countA, setCountA] = useState(1);
  const  countContext = useContext(BasicContext);
  function resetHandle() { 
    countContext.dispathch({ type: 'reset' });
  }
  function addHandle() { 
    countContext.dispathch({ type: 'add', count: +countA  });
  }
  return (
    <>
      <h4>子组件 - {countContext.count}</h4>
      <input type='number' value={countA} onChange={e => { setCountA(e.target.value) }} /><br/>
      <button onClick={addHandle}>加{countA}</button>{" "}
      <button onClick={resetHandle}>重置</button>
      <ChildrenB/>
    </>
  )
}