import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="About Page">
      <h1 className="text-xl text-red-400">About Page</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">홈으로 이동</Link>
          </li>
          <li>
            <Link href="/contact">컨택트 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
