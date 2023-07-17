import { useMemo, useState } from "react"

export default function MemoCase() {
  const [num,setNum] = useState(2020);
  const [random,setRandom] = useState(0);
  const res = useMemo(() => {
    console.log('渲染了');
    let total = 0;
    for (let i = 2; i <= num; i++){
      let flag = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) { 
          flag = false;
          break;
        }
      }
      if (flag) {
        total++;
      }
    }
    return total;
  },[num])
  return (
    <>
      <h2>useMemo使用</h2>
      <h3>若组件内部有2个number类型的变量num，random，有2个button，点击之后分别可以修改num，random的值.与此同时，该组件中还要求显示出num范围内的所有质数个数总和。</h3>
      <p>分析：显示出num范围内的所有质数个数总和，这个就是本组件中的“复杂的计算”，只要num的值未发生变化，质数总数是固定的，那么我们应该避免每次重新渲染时都需要计算一遍</p>
      <h4>num：{num} - 质数总和：{res} - random：{random}</h4>
      <button onClick={()=>{setNum(num + 1)}}>num加一</button>{" "}
      <button onClick={()=>{setRandom(Math.floor(Math.random()*100))}}>生成随机数</button>
    </>
  )
}