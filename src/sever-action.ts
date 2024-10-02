'use server'
import { Product } from '@/types/product'
// import { BASE_URL } from '@/constants/api'

export async function getProducts() {
  // const res = await fetch(`${BASE_URL}/products`, {
  //   cache: 'no-store'
  // })
  // const data: Product[] = await res.json()

  // return { data }
  const res = await fetch('http://localhost:4000/products', {})
  const data: Product[] = await res.json()
  return { data }
}
