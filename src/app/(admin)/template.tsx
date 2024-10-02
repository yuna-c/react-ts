// [코드스니펫] src>app>(admin)/about2/layout.tsx
'use client'
import '../globals.css'
import { useEffect } from 'react'

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    console.log('최초 렌더링 한 번만 호출합니다.')
  }, [])

  return (
    <div>
      <nav className="flex gap-2">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/business">business</a>
        <a href="/blog">Blog</a>
      </nav>

      <h1 className="text-4xl font-bold text-blue-700">어드민 페이지 입니다! </h1>
      {children}
    </div>
  )
}
