import { Product } from '@/types/product'
import Image from 'next/image'

const ProductList = async () => {
  const res = await fetch('http://localhost:4000/products', {
    cache: 'no-cache'
  })
  const data: Product[] = await res.json()

  return (
    <div className="mt-4">
      {data.map((product) => (
        <div className="flex border border-gray-300 p-4 gap-2 rounded-md" key={product.id}>
          <Image width={150} height={150} src={product.images} alt={product.title} className="flex-shrink-0" />
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
