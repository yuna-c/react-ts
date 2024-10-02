import { Product } from '@/types/product'
import type { Metadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id, 10)

  const res = await fetch(`http://localhost:4000/products/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch product data')
  }

  const data: Product = await res.json()

  return {
    title: data.seo.title ?? 'Product Detail',
    description: data.seo.description ?? 'Product detail description'
  }
}

export default async function ProductDetail({ params /*searchParams*/ }: Props) {
  const id = parseInt(params.id, 10)

  const res = await fetch(`http://localhost:4000/products/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch product data')
  }

  const data: Product = await res.json()

  return (
    <>
      <div className="page p-8">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p>{data.description}</p>
        <p className="text-lg font-semibold">{data.price.amount}$</p>
      </div>
    </>
  )
}
