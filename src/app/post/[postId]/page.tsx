type Props = {
  params: {
    postId: number
  }
}

// dynamic routing : \post\[id]\page.tsx
// https://nextjs.org/docs/app/building-your-application/routing#route-segments
// https://nextjs.org/docs/app/building-your-application/routing#nested-routes

export default function page({ params }: Props) {
  return (
    <div className="page">
      <div>ID : {params.postId} Page</div>
    </div>
  )
}
