import { memo } from "react";

const arr = [];
for (let i = 1; i < 101; i++){
  arr.push(`学生${i}`);
}

export const StuList = memo(({filterWord})=>{
  const newArr = arr.filter(ele => ele.indexOf(filterWord) !== -1);
  const start = Date.now();
  while (1) { 
    if(Date.now() - start > 2000){
      break;
    }
  }
  return (
    <ul>
      {newArr.map(ele =>
        <li key={ele}>{ele}</li>
      )}
    </ul>
  )
})