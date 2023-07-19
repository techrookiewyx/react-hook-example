import { useIpt } from "./useIpt";
export function ReturnSplChild1() {
  const [user, clear, bindUser] = useIpt('');
  const [psd, claerPsd, bindPsd] = useIpt('');
  function clearHandler(eve) { 
    eve.preventDefault();
    alert(`用户名：${user} - 密码：${psd}`);
    clear();
    claerPsd();
  }
  return (
    <div>
      <h4>我是子组件</h4>
      <form onSubmit={clearHandler}>
        <label>usename:</label>
        <input type='text' {...bindUser} /><br/>
        <label>password:</label>
        <input type='password' {...bindPsd} /><br/>
        <input type='submit' value='login' />
      </form>
    </div>
  )
}