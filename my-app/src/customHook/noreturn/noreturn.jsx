import { NoReturnChild1 } from "./children";
import { NoReturnChild2 } from "./children2";

export default function NoReturnCase() {
  return (
    <>
      <h2>自定义hook不带返回值案例</h2>
      <h3>若父组件内有多个子组件，每个子组件内部都有不同的业务代码，但是所有子组件有一个相同的功能，就是当自身内部变量value发生变化时，将网页标题改为变量value的值</h3>
      <NoReturnChild1/>
      <NoReturnChild2/>
    </>
  )
}