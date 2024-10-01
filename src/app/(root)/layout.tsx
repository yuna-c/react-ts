import Image from 'next/image'
import Logo from '/public/assets/logo.png'
import Link from 'next/link'
import { CartProvider } from '@/components/providers/ZustandProvider'
import CartButton from '@/components/_/CartButton'

export default function Layout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    // 하단 부분 전역 상태 관리 가능
    <CartProvider products={[]}>
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
