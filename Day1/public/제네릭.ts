/*************************************************************/

//NOTE - 제네릭
// : 타입을 변수처럼 사용(파라미터처럼)
// : <T>

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

//NOTE - 제네릭 함수
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['a', 'b', 'c']) // <string>을 써주지 않아도 타입 추론이 가능
printAnything<number>([1, 2, 3]) // <number>를 써주지 않아도 타입 추론이 가능

//NOTE - useState 에서 사용하기
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState<number>(1)
  const increment = () => {
    setCounter((prev) => prev++)
  }
  return <div onClick={increment}>{counter}</div>
}

export default App

//NOTE - 제네릭을 사용하지 않고도 초깃값을 number로 설정해도 같은 타입인 이유 : 제네릭 추론 쌉가능
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(1)
  const increment = () => {
    setCounter((prev) => prev++)
  }
  return <div onClick={increment}>{counter}</div>
}

export default App

//NOTE - 제네릭 타입 추론
function identity<T>(arg: T): T {
  return arg
}

let output = identity('Hello') // T는 string으로 추론

/*************************************************************/
