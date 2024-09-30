//NOTE - 정적인 라우팅 pathname을 갖는 경우 : 폴더를 만들어 tsx 생성
// pathname = 하나의 세그먼트(폴더명)

export default function page() {
  return (
    <div className="page">
      <h1 className="text-4xl font-bold text-red-600">TestPage</h1>
      <div>Hello Next</div>
    </div>
  )
}
