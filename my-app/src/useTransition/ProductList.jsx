import { useDeferredValue } from "react"

export function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => 
        <li key={product}>{product}</li>
      )}
    </ul>
  )
}