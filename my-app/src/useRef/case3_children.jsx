import { useEffect, useState } from "react"

export function RefChildren({ funRef }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const doSome= ()=> {
      setNum(Math.floor(Math.random() * 100));
    }
    funRef.current = {doSome} ;
  },[funRef])
  return (
    <>
      <h4>我是子组件: {num}</h4>
    </>
  )
}