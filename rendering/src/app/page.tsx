'use client' // 클라이언트 컴포넌트
import { useEffect } from 'react'

export default function Home() {
  // 환경
  // const os = require('os')
  // console.log(os.hostname())

  // 서버 컴포넌트
  // console.log('너 혹시 서버 컴포넌트야? 어디 있는데?')

  // 클라이언트 컴포넌트(브라우저)
  console.log('너 혹시 클라이언트 컴포넌트야? 어디 있는데?')
  useEffect(() => {
    console.log('서버에서 완전 빠졌지?')
  }, [])

  return <div className="p-8 m-4">안녕하세요. next.js 입니다</div>
}
