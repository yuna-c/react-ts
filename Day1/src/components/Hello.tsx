// 이렇게 타입을 선언해줄 수 있습니다.
type HelloProps = {
  name: string
}

const Hello = ({ name }: HelloProps) => {
  return <div className="Hello">Hello Component, {name}</div>
}

export default Hello
