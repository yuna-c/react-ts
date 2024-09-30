// https://fakestoreapi.com/
// ISR : 정적 증분 방식, 특정 타입에만 랜더링이 다시 되는 SSG,SSR 섞인 방식
// 특정 시간이 지나고 나서 랜더링 실행

export default async function Home() {
  const res = await fetch('http://localhost:4000/products', {
    // cache: '',
    next: {
      revalidate: 3
    }
  })
  const data: Product[] = await res.json()
  console.log(`render:: render`)

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

export type Product = {
  id: number
  handle: string
  availableForSale: boolean
  isNew: boolean
  title: string
  description: string
  descriptionHtml: string
  options: {
    name: string
    values: string[]
  }[]
  price: {
    amount: string
    currencyCode: string
  }
  images: string
  seo: {
    title: string
    description: string
  }
  tags: string[]
  rating: number
}
