/*************************************************************/
// //NOTE - 객체 구조 정의
// type CustomType = { name: string; age: number }
// interface CustomType2 {
//   name: string
//   age: number
// }

// //NOTE - 변수
// let variable: number = 1

// //NOTE - 인자 타입
// function add(a: number, b: number /*어노테이션*/): number {
//   return a + b
// }
// add(1, 2)

// //NOTE - 객체 타입
// function add2({ a, b }: { a: number; b: number }): number {
//   return a + b
// }
// add2({ a: 1, b: 2 })

/*************************************************************/

//NOTE - 비동기
export type Todo = {
  id: string
  title: string
  completed: boolean
}

// 어노테이션 : 속성, 설명 부여
/*************************************************************/
//NOTE - 1
export async function getTodos() {
  const res = await fetch('http://localhost:4000/todos')
  const data: Todo[] = await res.json()
  return data
}

//NOTE - 2
// async function getTodos(): Promise<Todo[]> {
//   const res = await fetch('https://localhost:4000/todos')
//   const data = await res.json()
//   return data
// }
/*************************************************************/

// getTodos().then(console.log)
