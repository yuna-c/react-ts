// 'use client'
import { Product } from '@/types/product'
// import React, { useEffect, useState } from 'react'

const ProductList = async () => {
  // 서버 사이드 로직
  const res = await fetch('http://localhost:4000/products', {
    cache: 'no-cache'
  })
  const data: Product[] = await res.json()
  // console.log(data)

  // 클라이언트 컴포넌트 로직
  // const [isLoading, setIsLoading] = useState(false)
  // const [data, setData] = useState<Product[]>([])

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch('http://localhost:4000/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setIsLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <>Loading...</>

  return (
    <div className="p-8 m-4">
      {data.map((product) => (
        <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
          <img className="rounded-smr" width={150} height={150} src={product.images} alt={product.title} />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
              <p className="mt-4 text-2xl">{product.price.amount}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
