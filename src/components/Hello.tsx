type HelloProps = {
  name: string
}

const Hello = ({ name }: HelloProps) => {
  return <div className="Hello">Hello Component {name}</div>
}

export default Hello
