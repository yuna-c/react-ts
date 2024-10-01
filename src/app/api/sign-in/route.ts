import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json()
  console.log(payload)

  const res = await fetch(`http://localhost:8000/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store', //패치캐시 안생기게
    body: JSON.stringify({
      ...payload
    }),
    credentials: 'include' // 쿠키를 포함하여 요청
  })

  const data = await res.json()
  console.log(data)

  // assessToken값이 쿠키로 세팅, httpOnly로 세팅이 되면 브라우저 자바스크립트에서는 쿠키에 접근 불가능하고
  // 서버 환경에서만 헤더에 들어온 쿠키를 접근 가능하게 막음
  const cookieStore = cookies()

  cookieStore.set('accessToken', data.accessToken, {
    httpOnly: true,
    // secure: true, // HTTPS 환경일 때만 사용
    path: '/', // 모든 경로에서 유효하도록 설정
    maxAge: 60 * 60 * 24 // 쿠키 유효 기간 설정 (예: 1일)
  })

  return NextResponse.json({
    data: true
  })
}
