import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `Detail 페이지 : ${params.id}`,
    description: `Detail 페이지 : ${params.id}`
  }
}

const MyDetailPage = ({ params }: Props) => {
  return (
    <>
      <div>마이 Detail 페이지 : {params.id}</div>
      <Link href={'/about2'}>어바웃 2</Link>
    </>
  )
}

export default MyDetailPage
