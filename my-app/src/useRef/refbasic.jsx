import { useRef } from "react";

export default function RefBasic() {
  const countRef = useRef(0)
  const handleClick = () => {
    countRef.current = countRef.current + 1;
    alert(`click ${countRef.current} times`);
  };
  return (
    <>
      <h2>useRef使用基本案例</h2>
      <h3>通过ref获取的值，修改不会触发重新渲染</h3>
      <h4>{countRef.current}</h4>
      <button onClick={handleClick}>点我试试</button>
    </>
  )
}