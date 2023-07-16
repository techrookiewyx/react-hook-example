import { createContext, useContext } from "react"
const UserInfo = createContext();
const NewsInfo = createContext();
export default function ContextHighCase() {
  return (
    <>
      <h2>useContext高级用法</h2>
      <p>将父组件多个共享数据传递给一个子组件</p>
      <UserInfo.Provider value={{ name: 'tom'}}>
        <NewsInfo.Provider value={{title:'Hello React hook'}}>
          <Children />
        </NewsInfo.Provider>
      </UserInfo.Provider>
    </>
  )
}
function Children() { 
  const user = useContext(UserInfo);
  const news = useContext(NewsInfo);
  return (
    <div>
      <p>子组件中获取的信息：{user.name} - {news.title}</p>
    </div>
  )
}