import { Product } from '@/types/product'

export async function GET(request: Request) {
  console.log('GET /api/test')
  const res = await fetch('http://localhost:4000/products', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data: Product[] = await res.json()
  const newData = data.filter((p) => p.isNew)
  return Response.json({ newData })
}

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
