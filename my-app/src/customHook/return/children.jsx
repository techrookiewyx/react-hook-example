import { useCountChange } from "./useCountChange";
export function ReturnChild1() {
  const [add, sub, mul, reset,count] = useCountChange(0);
  return (
    <div>
      <h4>我是子组件1，我的count值为:{count}</h4>
      <button onClick={() => {add(1)}}>加1</button>
      <button onClick={() => {sub(2)}}>减2</button>
      <button onClick={() => {mul(2)}}>乘2</button>
      <button onClick={() => {reset()}}>重置</button>
    </div>
  )
}