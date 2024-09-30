// https://fakestoreapi.com/
// CSR : 클라이언트 컴포넌트를 만들어서 use client를 써서 사용, 서버가 아니라 클라이언트 콘솔에서 렌더가 뜬다

import ProductList from './_components/ProductList'

export default async function Home() {
  return <ProductList />
}

export type Product = {
  id: number
  handle: string
  availableForSale: boolean
  isNew: boolean
  title: string
  description: string
  descriptionHtml: string
  options: {
    name: string
    values: string[]
  }[]
  price: {
    amount: string
    currencyCode: string
  }
  images: string
  seo: {
    title: string
    description: string
  }
  tags: string[]
  rating: number
}
