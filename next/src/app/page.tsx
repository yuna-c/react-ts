import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {
  return (
    <div>
      안녕하세요. next.js임
      {/* <div>
        <a href={'/test'}>a로 test 이동</a>
      </div> */}
      <div>
        <Link href={'/test'}>Link로 test 이동</Link>
      </div>
    </div>
  )
}
