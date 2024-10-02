import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="Contact Page">
      <h1 className="text-xl text-red-400">Contact Page</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">홈으로 이동</Link>
          </li>
          <li>
            <Link href="/about">어바웃 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
