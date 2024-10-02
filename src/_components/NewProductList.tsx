import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

const NewProductList = async () => {
  const res = await fetch('http://localhost:4000/products', {
    cache: 'no-store'
  })
  const data: Product[] = await res.json()
  const newData = data.filter((p) => p.isNew)

  return (
    <div className="w-full flex gap-4 p-4 overflow-x-auto">
      <div className="flex gap-4">
        {newData.map((product) => (
          <div key={product.id} className="w-[250px] border border-gray-300 p-4 rounded-md flex-shrink-0">
            <Link href={`/products/${product.id}`} className="block">
              <div className="flex gap-4">
                <Image className="rounded-sm object-cover" width={80} height={80} src={product.images} alt={product.title} />
                <div className="flex flex-col justify-between">
                  <h2 className="text-md font-medium">{product.title}</h2>
                  <p className="mt-4 font-thin">{product.price.amount}$</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewProductList
