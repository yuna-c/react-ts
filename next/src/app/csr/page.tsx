'use client'
import { Post } from '@/types/Post'
import { useEffect, useState } from 'react'
export default function CSRPage() {
  const [data, setData] = useState<Post[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then((res) => res.json())
      .then((data: Post[]) => {
        setData(data)
        console.log(data)
      })
  }, [])

  return <div>{data.length === 0 ? <p>loading</p> : JSON.stringify(data)}</div>
}
