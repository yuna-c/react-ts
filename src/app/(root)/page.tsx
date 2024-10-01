import ProductList from '@/components/ProductList'
import NewProductList from '@/components/NewProductList'
import { getProducts } from '@/server-action'
import ButtonContainer from '@/components/_/Button'

export default async function Home() {
  // const { data } = await getProducts()

  return (
    <>
      <section className="flex flex-col p-10 gap-6">
        <ButtonContainer />
        <NewProductList />
        {/* <ProductList products={data} /> */}
        <ProductList />
      </section>
    </>
  )
}
