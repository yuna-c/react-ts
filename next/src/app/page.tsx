'use client' // useRouter를 사용할 때는 항상 코드 최상단에 “use client”를 삽입
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const handleButtonClick = () => {
    setTimeout(() => {
      router.replace('/test')
    }, 1000)
  }

  //NOTE - useRouter(히스토리 스택)
  // router.push 히스토리 스택에 추가
  // router.replace 현재 URL을 히스토리 스택에서 새로운 URL로 대체, 맨위에 있는 히스토리를 새로운 URL로 대체
  // router.back 사용자를 히스토리 스택에서 한 단계 뒤로 이동
  // router.reload 현재 페이지를 새로 고침, 히스토리 스택 영향 X

  return (
    <div>
      안녕하세요. next.js임
      {/* <div>
        <a href={'/test'}>a로 test 이동</a>
      </div> */}
      <div>
        <Link href={'/test'}>Link로 test 이동</Link>
      </div>
      <div>
        <button onClick={handleButtonClick}>클릭!</button>
      </div>
    </div>
  )
}
