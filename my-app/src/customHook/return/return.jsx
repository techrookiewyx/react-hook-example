import { ReturnChild1 } from "./children";
import { ReturnChild2 } from "./children2";


export default function ReturnCase() {
  return (
    <>
      <h2>自定义hook带返回值案例</h2>
      <h3>子组件有四个按钮分别使count进行加、减、乘、重置操作，使用自定义hook完成</h3>
      <ReturnChild1 />
      <ReturnChild2/>
    </>
  )
}