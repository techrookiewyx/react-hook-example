import { useState } from "react";

export function useCountChange(init){
  const [count, setCount] = useState(init);
  const add = params => { setCount(count + params) };
  const sub = params => { setCount(count - params) };
  const mul = params => { setCount(count * params) };
  const reset = () => { setCount(init) };
  return [add, sub, mul, reset, count];
}