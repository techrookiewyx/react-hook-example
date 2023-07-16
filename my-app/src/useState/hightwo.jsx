import { useState } from "react"

export default function StateHighTwo() {
  const [person, setPerson] = useState({name:'puxiao',age:34});
  function nameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }
  function ageChange(e){
    setPerson({ ...person, age: e.target.value });
  }
  return (
    <div>
      <h2>useState高级用法</h2>
      <p>数据类型为Objcet的修改方法</p>
      <h3>{JSON.stringify(person)}</h3>
      <input type='text' value={person.name} onChange={nameChange} />
      <input type='number' value={person.age} onChange={ageChange} />
    </div>
  )
}
