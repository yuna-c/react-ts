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
    })
  })

  const data = await res.json()
  console.log(data)

  return NextResponse.json({
    data: true
  })
}
