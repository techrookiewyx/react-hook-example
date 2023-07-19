import { useState, useTransition } from "react";
import { ProductList } from "./ProductList";
const products = []; 
for (let i = 0; i < 10000; i++) {
  products.push(`Product ${i + 1}`)
}
export default function TransitonCase() {
  const [word, setWord] = useState('');
  const [isPending, startTransition] = useTransition();
  //根据关键词过滤数组
  const filteredProducts = products.filter((product) => product.includes(word));
  function updateFilterWord(eve) { 
    startTransition(() => {
      setWord(eve.target.value); //降低渲染优先级，所有使用word变量的的都会降低
    })
  }
  return (
    <>
      <h2>useTransiton案例</h2>
      <h3>有一个输入框，根据用户输入内容来过滤列表项，用户输入时过滤搜索，达到一个联想输入的效果</h3>
      {/* 这里input不是受控组件，只是根据input值来修改数量过滤关键词 */}
      <input type="text" onChange={updateFilterWord} />
      {isPending && <p style={{ color: 'red' }}>更新列表。. </p>}
      <ProductList products={filteredProducts} />
    </>
  )
}