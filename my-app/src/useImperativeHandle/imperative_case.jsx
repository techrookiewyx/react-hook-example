import { useRef } from "react"
import { ChildrenBtn } from "./children";

export default function ImpHandlerUse() {
  const btnRef = useRef(null);
  function clickHandler() {
    btnRef.current.addCount();
  }
  return (
    <>
      <h2>useImperativeHandle使用案例</h2>
      <h3>子组件要求：有变量count，默认值为0。有一个函数addCount，该函数体内部执行count+1，有一个按钮，点击按钮执行addCount函数</h3>
      <h3>父组件要求：父组件内使用上述子组件，父组件内有一个按钮，点击执行上述子组件内定义的函数 addCount</h3>
      <button onClick={clickHandler}>我是父组件的按钮</button><br/>
      <ChildrenBtn content='我是子组件的按钮' ref={btnRef}/>
    </>
  )
}