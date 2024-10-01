import Image from 'next/image'
import Logo from '/public/assets/logo.png'
import Link from 'next/link'
import { CartProvider } from '@/components/providers/ZustandProvider'
import CartButton from '@/components/_/CartButton'
import { Product } from '@/type/product'

type GetCartProducts = {
  id: string
  product: Product
  quantity: number
}
export default async function Layout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  const res = await fetch('http://localhost:4000/carts', {
    cache: 'no-store'
  })
  const data: GetCartProducts[] = await res.json()

  return (
    // 하단 부분 전역 상태 관리 가능
    <CartProvider products={data.map((p) => ({ ...p.product, quantity: p.quantity }))}>
      {/* product, quantity 합쳐진 상태로 넣어줌 */}
      <header className="relative flex h-[60px] justify-center items-center">
        <Link href={'/'}>
          <Image height={40} src={Logo} alt="logo"></Image>
        </Link>
        <div className="absolute flex gap-2 right-[40px] top-1/2 -translate-y-1/2">
          <CartButton />
          <Link href={'/sign-in'}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Sign In</button>
          </Link>
        </div>
      </header>
      {modal}
      {children}
    </CartProvider>
  )
}
