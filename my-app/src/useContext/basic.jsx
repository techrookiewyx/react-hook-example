import { useContext } from "react"
import { BasicContext } from "./context";
function Children() { 
  const info = useContext(BasicContext);
  return (
    <div>
      <h3>我是最内层组件:</h3>
      <p>{info.name} - {info.age}</p>
    </div>
  )
}
function Middle() {
  return (
    <>
      <Children/>
    </>
  )
}
export default function ContextBasicCase() {
  return (
    <>
      <h2>useContext基础用法</h2>
      <p>将父组件多个共享数据传递给子组件</p>
      <BasicContext.Provider value={{ name: 'tom', age: 18 }}>
        <Middle/>
      </BasicContext.Provider>
    </>
  )
}