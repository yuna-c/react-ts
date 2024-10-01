import ProductDetail from '@/components/_/ProductDetail'
import { BASE_URL } from '@/constants/api'
import { Product } from '@/type/product'

type Props = {
  params: {
    id: string
  }
}

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:4001/products', {
    cache: 'force-cache',
    next: {
      tags: ['products']
    }
  })

  const data: Product[] = await res.json()

  return data.map((p) => ({ id: p.id.toString() }))
}

const fetchProduct = async (id: number) => {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  const data: Product = await res.json()

  return data
}

// 요부분
export const generateMetadata = async ({ params }: Props) => {
  const id = parseInt(params.id, 10)
  const data = await fetchProduct(id)
  return {
    title: data.seo.title,
    description: data.seo.description,
    image: data.images
  }
}

const ProductDetailPage = async ({ params }: Props) => {
  const id = parseInt(params.id, 10)
  const data = await fetchProduct(id)

  return <ProductDetail product={data} />
}

export default ProductDetailPage
