import { Post } from '@/types/Post'

export default async function SSRPage() {
  const res = await fetch('http://localhost:4000/posts', {
    cache: 'no-store'
  })
  const data: Post[] = await res.json()
  console.log(data)

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  )
}
