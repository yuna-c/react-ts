'use server'
import { Product } from '@/type/product'
import { BASE_URL } from '@/constants/api'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    // cache: 'no-store', dynamic  fatch cache
    cache: 'force-cache'
  })
  const data: Product[] = await res.json()

  return { data }
}

// force-cache 되어있는 캐시 날리기
export async function rePath() {
  revalidatePath('/')
}

export async function reTag() {
  revalidateTag('products')
}
