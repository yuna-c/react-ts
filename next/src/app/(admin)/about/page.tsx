import Link from 'next/link'

export default function AboutPage() {
  // http://localhost:3000/about
  return (
    <div className="page">
      소개 페이지야dfsfsdfvds
      <br />
      <div>
        <Link href={'/about2'}>about2로 가</Link>
      </div>
    </div>
  )
}
