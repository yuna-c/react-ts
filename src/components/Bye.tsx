type ByeProps = {
  name: string
}

const Bye = ({ name }: ByeProps) => {
  return <div className="Bye">Bye Component, {name}</div>
}

export default Bye
