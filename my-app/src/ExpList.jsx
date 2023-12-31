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
      <li><Link to='case12'>useReducer与useContext结合案例</Link></li>
      <li><Link to='case13'>useCallBack使用案例</Link></li>
      <li><Link to='case14'>useMemo使用案例</Link></li>
      <li><Link to='case15'>useRef简单案例</Link></li>
      <li><Link to='case16'>useRef使用案例-1</Link></li>
      <li><Link to='case17'>useRef使用案例-2</Link></li>
      <li><Link to='case18'>useRef使用案例-3</Link></li>
      <li><Link to='case19'>forwardRef的使用</Link></li>
      <li><Link to='case20'>useImperativeHandle使用案例</Link></li>
      <li><Link to='case21'>useLayoutEffect使用案例</Link></li>
      <li><Link to='case22'>useDebugValue使用案例</Link></li>
      <li><Link to='case23'>useDeferredValue案例</Link></li>
      <li><Link to='case24'>useTransition案例</Link></li>
      <li><Link to='case25'>自定义hook案例-无返回值</Link></li>
      <li><Link to='case26'>自定义hook案例-带回值</Link></li>
      <li><Link to='case27'>自定义hook案例-带特殊回值</Link></li>
    </ul>
  )
}