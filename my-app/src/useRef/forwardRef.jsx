import { forwardRef, useRef } from "react"

const ChildrenButton = forwardRef((props,ref) => {
  return <button ref={ref}>{props.content}</button>
})
export default function ForWardRefUse() {
  const btnRef = useRef(null);
  return (
    <>
      <h2>forwardRef的使用</h2>
      <h3>访问一个子组件某个的DOM节点</h3>
      <button onClick={() => {console.log(btnRef.current);}}>我是父组件的按钮</button><br/>
      <ChildrenButton content='我是子组件的按钮' ref={btnRef}/>
    </>
  )
}