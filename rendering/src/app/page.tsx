// https://fakestoreapi.com/
// SSR : 사용자가 페이지에 접속 시도(요청) 할때 마다 새로 컨텐츠 불러와서 보여주는
// 패치안에서 캐싱이 되지 않으니까 매번 새로고침 할 때마다 랜더링

export default async function Home() {
  const res = await fetch('http://localhost:4000/products', {
    cache: 'no-store'
    // cache: 'force-cache' => SSG변경(안쓰면 기본 값으로 force-cache)
  })
  const data: Product[] = await res.json()
  console.log(`render`)

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
