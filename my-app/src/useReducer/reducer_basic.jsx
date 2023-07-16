import { useReducer } from "react"
function reducer(count,action) { 
  switch(action){
    case 'add':{
      return count + 1;
    }
    case 'sub':{
      return count - 1;
    }
    case 'mul': {
      return count * 2;
    }
    default: return count;
  }
}
export default function ReducerBasicCase() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>useReducer基础用法</h2>
      <p>练习：使用useReducer完成某React组件内部有一个变量count，默认值为0，有3个button，点击之后分别可以修改count的值。3个按钮的功能分别为为：点击之后count+1，点击之后count -1，点击之后翻倍</p>
      <h3>{count}</h3>
      <button onClick={() => {dispatch('add')}}>加一</button>{" "}
      <button onClick={() => {dispatch('sub')}}>减一</button>{" "}
      <button onClick={() => {dispatch('mul')}}>乘2</button>{" "}
    </>
  )
}