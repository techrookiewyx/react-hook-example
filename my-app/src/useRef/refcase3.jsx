import { useRef } from "react";
import { RefChildren } from "./case3_children";

export default function RefCaseThree() {
  const childrenRef = useRef(null);
  function clickHandler() { 
    if (childrenRef) { 
      childrenRef.current.doSome();
    }
  }
  return (
    <>
      <h2>useRef使用案例2</h2>
      <h3>使用 useRef 实现父组件调用子组件中的函数</h3>
      <RefChildren funRef={childrenRef} />
      <button onClick={clickHandler}>点我调用子组件的方法</button>
    </>
  )
}