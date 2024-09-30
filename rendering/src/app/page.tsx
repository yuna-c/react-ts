// https://fakestoreapi.com/
// ISR : 정적 증분 방식, 특정 타입에만 랜더링이 다시 되는 SSG,SSR 섞인 방식
// 특정 시간이 지나고 나서 랜더링

import { Suspense } from 'react'
import NewProductList from './_components/NewProductList'
import ProductList from './_components/ProductList'
import Loading from './loading'

export default async function Home() {
  return (
    <div className="p-8 m-4">
      <h1>sparta shop</h1>
      <Suspense fallback={<Loading />}>
        <NewProductList />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  )
}
