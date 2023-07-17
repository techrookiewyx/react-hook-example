import { useCallback, useEffect, useState } from "react"
import Button from "./Button";

export default function CallBackCase() {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(5000);
  useEffect(() => { 
    document.title = `Hooks - ${Math.floor(Math.random()*100)}`;
  })
  const clkHand1 = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const clkHand2 = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <>
      <h2>useCallBack使用</h2>
      <p>要实现一个组件，具有如下功能：组件内部有2个变量age，salary，有2个自定义组件Button，点击之后分别可以修改age，salary值</p>
      <h3>父组件：{age} - {salary}</h3>
      <Button title='age按钮' clickHandle={clkHand1}/>
      <Button title='salary按钮' clickHandle={clkHand2}/>
    </>
  )
}