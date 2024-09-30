// rface
'use client'
import React, { useEffect } from 'react'

const ClientExample = () => {
  // 클라이언트 컴포넌트(브라우저) 분리
  console.log('안녕 난 클라이언트 컴포넌트야💔')

  useEffect(() => {
    console.log('서버에서 완전 빠졌지?')
  }, [])
  return <div>ClientExample</div>
}

export default ClientExample
