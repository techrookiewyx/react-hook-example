import { useReducer } from "react"
function reducer(count,action) { 
  switch(action.action){
    case 'add':{
      return count + action.count;
    }
    case 'sub':{
      return count - action.count;
    }
    case 'mul': {
      return count * action.count;
    }
    default: return count;
  }
}
function getRandom() { 
  return Math.floor(Math.random()*10);
}
export default function ReducerBasicCaseTwo() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h2>useReducer基础用法</h2>
      <p>练习2：根据练习1新增需求，点击按钮点击之后，能够随机增加多少、减多少、或乘以几</p>
      <h3>{count}</h3>
      <button onClick={() => {dispatch({action:'add',count:getRandom()})}}>加</button>{" "}
      <button onClick={() => {dispatch({action:'sub',count:getRandom()})}}>减</button>{" "}
      <button onClick={() => {dispatch({action:'mul',count:getRandom()})}}>乘</button>{" "}
    </>
  )
}