import { useEffect, useRef } from "react";

export default function RefCaseOne() {
  const iptRef = useRef(null);
  useEffect(() => { 
    iptRef.current.focus();
  })
  return (
    <>
      <h2>useRef使用案例1</h2>
      <h3>若我们有一个组件，该组件只有一个输入框，当该组件挂载到网页后，自动获得输入焦点。</h3>
      <input type='text' ref={iptRef} />
    </>
  )
}