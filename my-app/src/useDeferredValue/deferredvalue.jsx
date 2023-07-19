import { useDeferredValue, useState } from "react";
import {StuList } from "./stulist";


export default function DeferValueCase() {
  const [word, setWord] = useState('');
  const deferWord = useDeferredValue(word);
  return (
    <>
      <h2>useDeferredValue案例</h2>
      <h3>有一个输入框，根据用户输入内容来过滤列表项，当列表查询速度慢时会造成输入框的卡顿</h3>
      <h3>使用useDeferredValue使输入框不卡顿</h3>
      <input type="text" value={word} onChange={(e) => { setWord(e.target.value) }} />
      <StuList filterWord={deferWord} />
    </>
  )
}