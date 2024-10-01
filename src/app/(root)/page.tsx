import ProductList from '@/components/ProductList'
import NewProductList from '@/components/NewProductList'
import { getProducts } from '@/server-action'
import ButtonContainer from '@/components/_/Button'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

export default async function Home() {
  // const { data } = await getProducts()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 바로 리페칭 되는 경우 바로 stale되는 경우 막고 싶을 때 넣음
        staleTime: 1000
      }
    }
  })

  // 프리패치 부분
  // 비동기로 프리패치쿼리 한 후 클라이언트에 넘겨줌
  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () => getProducts() // 서버 액션 넣어서(무조건 새로운 함수 반환해서 함)
  })

  return (
    // HydrationBoundary 컴포넌트를 임포트 해서 컴포넌트 감싼후
    // state 상태를 dehydrate를 만들어서 쿼리 클라이언트를 페이로드(정적 데이터로 변경) 한 후
    // HydrationBoundary안으로 쏙 넣어줌

    // 하위에서 접근하는 쿼리클라이언트 에서는 서버에서 만들어준 데이터가 먼저 들어옴
    // 새로고침 해도 프리패치를 하지 않았을 때를 대비해서 바로 데이터 그려져 있음
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col p-10 gap-6">
        <ButtonContainer />
        <NewProductList />
        {/* <ProductList products={data} /> */}
        <ProductList />
      </section>
    </HydrationBoundary>
  )
}
