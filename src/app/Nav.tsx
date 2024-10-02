'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-2 border border-b-red-600">
      <Link href="/csr" className={pathname === '/csr' ? 'font-bold text-red-600' : ''}>
        CSR
      </Link>
      <Link href="/ssr" className={pathname === '/ssr' ? 'font-bold text-red-600' : ''}>
        SSR
      </Link>
      <Link href="/isr" className={pathname === '/isr' ? 'font-bold text-red-600' : ''}>
        ISR
      </Link>
      <Link href="/ssg" className={pathname === '/ssg' ? 'font-bold text-red-600' : ''}>
        SSG
      </Link>
    </nav>
  )
}
