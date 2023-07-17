import { useReducer } from "react";
import { BasicContext } from "../useContext/context";
import { ChildrenA } from "./ChildrenA";
const initCount = 0;
function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return state + action.count;
    }
    case 'sub': {
      return state + action.count;
    }
    case 'reset': {
      return initCount;
    }
    default: return state;
  }
}
export default function ReducerContext() {
  const [count, dispathch] = useReducer(reducer, initCount);
  return (
    <>
      <BasicContext.Provider value={{ count, dispathch }}>
        <h2>useReducer与useContext结合使用</h2>
        <p>需求：有全局数据变量count,不同层级的子组件均可获取并修改全局变量count</p>
        <h3>父组件 - {count}</h3>
        <ChildrenA/>
      </BasicContext.Provider>
    </>
  );
}

