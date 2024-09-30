import '../globals.css'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 헤더 */}
      <header className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
      </header>

      {/* 페이지 내용 */}
      <main className="flex-1 container mx-auto p-4">{children}</main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
