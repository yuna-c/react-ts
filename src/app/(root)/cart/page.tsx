'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartContext } from '@/components/providers/ZustandProvider'

const CartPage = () => {
  // const { data: products }: { data: Product[] } = await getProducts()
  const { products, removeProduct } = useCartContext((state) => state)

  // local에서 삭제 되었기 때문에 useMutation을 통해 delete를 해 주어야 서버 데이터까지 모두 날아감
  const handleRemoveItem = (id: number) => {
    removeProduct(id)
  }

  return (
    <section className="flex flex-col items-center p-5 w-full justify-center max-w-screen-lg m-auto min-h-screen py-2">
      <h1>Cart</h1>
      {products.length > 0 ? (
        <div className="flex flex-col gap-4 w-full">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-4 pb-4 border-b border-white">
              <Image width={80} height={80} src={product.images} alt={product.title} className="w-[80px] h-[80px] object-cover flex-shrink-0"></Image>
              <div className="flex-1 truncate">
                {product.title} - ${product.price.amount}
              </div>
              <div>{product.quantity}</div>
              <button onClick={() => handleRemoveItem(product.id)} className="bg-gray-800 text-white px-4 py-2 rounded-md">
                Remove
              </button>
            </div>
          ))}

          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Checkout</button>
        </div>
      ) : (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      )}
    </section>
  )
}

export default CartPage
