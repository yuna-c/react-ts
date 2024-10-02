
type Props = {
  params: {
    id: number
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `Blog 페이지 ${params.id}`,
    description: `Detail 페이지 : ${params.id}`
  }
}
export default function BlogPage({ params }: Props) {
  return (
    <div className="BlogPage">
      <h1 className="text-xl text-red-400">Blog Page</h1>
      <p>Id : {params.id} page</p>
    </div>
  )
}
