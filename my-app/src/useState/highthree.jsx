import { useState } from "react"

export default function StateHighThree() {
  const [str, setStr] = useState('');
  const [arr, setArr] = useState(['react', 'Koa']);
  function addHeadHandler() {
    setArr([str, ...arr]); //添加至头
    setStr('');
  };
  function addEndHandler() {
    setArr([...arr, str]); //添加至尾
    setStr('');
  }
  function delHeadHandler() {
    let newArr = [...arr];
    newArr.shift();
    setArr(newArr);
  }
  function delEndHandler() { 
    let newArr = [...arr];
    newArr.pop();
    setArr(newArr);
  }
  function delByIndex(e) {
    let index = e.target.attributes.index.value;
    let newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  }
  return (
    <div>
      <h2>useState高级用法</h2>
      <p>数据类型为Array的修改方法,学习计划列表案例</p>
      <input type='text' value={str} onChange={e => { setStr(e.target.value) }} /><br/>
      <button onClick={addHeadHandler} >添加至头</button>{" "}
      <button onClick={addEndHandler} >添加至尾</button>{" "}
      <button onClick={delHeadHandler} >从头删除1项</button>{" "}
      <button onClick={delEndHandler} >从尾删除1项</button>
      <ul>
        {arr.map((ele,index) =>
          <li key={`ele${index}`}>
            学习{index}——{ele}{" "}{" "}
            <span index={index} onClick={delByIndex} style={{ cursor: 'pointer', color:'red'}}>删除</span>
          </li>  
        )}
      </ul>
    </div>
  )
}
