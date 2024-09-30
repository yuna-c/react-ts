// https://fakestoreapi.com/
// ISR : 정적 증분 방식, 특정 타입에만 랜더링이 다시 되는 SSG,SSR 섞인 방식
// 특정 시간이 지나고 나서 랜더링

import ProductList from './_components/ProductList'

export default async function Home() {
  return (
    <div className="p-8 m-4">
      <h1>sparta shop</h1>
      <ProductList />
    </div>
  )
}
