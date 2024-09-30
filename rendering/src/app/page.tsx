// https://fakestoreapi.com/
// SSG : 빌드타임에 홈페이지 만들어 줌(정적)

export default async function Home() {
  const res = await fetch('http://localhost:4000/products')
  const data: Product[] = await res.json()
  console.log(`data`, data)

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
