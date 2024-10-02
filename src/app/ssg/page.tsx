import { Post } from '@/types/Post'

export default async function SSGPage() {
  const res = await fetch('http://localhost:4000/posts', {
    cache: 'force-cache'
  })
  const data: Post[] = await res.json()
  console.log(data)

  return <div>{JSON.stringify(data)}</div>
}
