import { useTime } from "./useTime"

export default function DebugValueCase() {
  const [time,setTime] = useTime(new Date(Date.now()));
  const local = time.toLocaleString("zh-CN");
  return (
    <>
      <h2>useDebugValue使用案例</h2>
      <h4>{local}</h4>
      <button onClick={() => {setTime(new Date(Date.now()))}}>修改时间</button>
    </>
  )
}