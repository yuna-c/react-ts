import { useState } from 'react'

const GenericTest = () => {
  // 제네릭
  // const [counter, setCounter] = useState<number>(1)
  const [counter, setCounter] = useState<string>('')
  const increment = () => {
    setCounter((prev) => prev++)
  }
  return <div onClick={increment}>{counter}</div>
}
export default GenericTest
