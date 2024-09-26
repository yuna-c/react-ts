import Link from 'next/link'

export default function AboutPage() {
  // http://localhost:3000/about
  return (
    <div className="page">
      소개 페이지<br/>
      <Link href={'/about'}> ?? about으로 가</Link>
    </div>
  )
}
