import { Product } from '@/types/product'

const NewProductList = async () => {
  const res = await fetch('http://localhost:4000/products', {
    cache: 'no-store'
  })
  const data: Product[] = await res.json()
  const newData = data.filter((p) => p.isNew)
  // Product 타입의 필드 중 하나로, 각 제품이 "새 제품"인지 여부를 나타내는 불리언(boolean) 값
  console.log(newData)

  if (Math.random() > 0.5) throw new Error('오류!')

  return (
    <div className="flex gap-2 oveflow-auto">
      {newData.map((product) => (
        <div className="flex" key={product.id}>
          <img className="rounded-sm object-scale-down" width={80} src={product.images} alt={product.title} />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-md font-medium">{product.title}</h2>
              <p className="mt-4 font-thin">{product.price.amount}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewProductList
