import { Link } from "react-router-dom";
import style from './style.module.css'
export default function ExpLise() { 
  return (
    <ul className={style.ul}>
      <li><Link to='case1'>useState基础用法</Link></li>
      <li><Link to='case2'>useState高级用法-1</Link></li>
      <li><Link to='case3'>useState高级用法-2</Link></li>
      <li><Link to='case4'>useState高级用法-3</Link></li>
      <li><Link to='case5'>useEffect基础用法</Link></li>
      <li><Link to='case6'>useEffect高级用法-1</Link></li>
      <li><Link to='case7'>useEffect高级用法-2</Link></li>
      <li><Link to='case8'>useContext基础用法</Link></li>
      <li><Link to='case9'>useContext高级用法</Link></li>
      <li><Link to='case10'>useReducer基础用法-1</Link></li>
      <li><Link to='case11'>useReducer基础用法-2</Link></li>
    </ul>
  )
}