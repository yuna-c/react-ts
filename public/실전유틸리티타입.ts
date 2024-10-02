/*************************************************************/

//NOTE - 실전 유틸리티 타입(타입을 인자처럼 쓰는 함수)
// : Generic 을 사용해서 타입을 effective(효과적으로) 하게 쓸 수 있게 해주는 유틸리티 타입

//NOTE - 유틸리티 타입
// : 간단한 계산을 통해 또 다른 타입을 만들어주는 타입
// : 데이터를 이용해 간단한 계산을 하는 함수들을 Utility Function이라고 부르는 것처럼 타입을 통해 간단한 계산을 수행해 주는 타입을 유틸리티 타입
// : 타입 변환을 용이하게 하는 ts 문법

/*************************************************************/

// Utility Type 들

//NOTE - Pick<T, K>
// : T에서 프로퍼티 K의 집합을 선택해 타입을 구성
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}

//NOTE - Omit<T, K>
// : T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}

//NOTE - Exclude<T, U>
// : T에서 U에 할당할 수 있는 모든 속성을 제외한 타입을 구성
type T0 = Exclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // "c"
type T2 = Exclude<string | number | (() => void), Function> // string | number

//NOTE - Partial<T>
// : T의 모든 프로퍼티를 선택적으로 만드는 타입을 구성
// : 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환
// : 일부의 값을 사용
interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter'
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash'
})

console.log(todo1) //{ title: 'organize desk', description: 'clear clutter' }
console.log(todo2) //{ title: 'organize desk', description: 'throw out trash' }

//NOTE - ReadOnly<T>
// : T의 모든 프로퍼티를 읽기 전용(readonly)으로 설정한 타입을 구성
// : 재할당 X
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'
}

todo.title = 'Hello' // 오류: 읽기 전용 프로퍼티에 재할당할 수 없음

//NOTE - Record<K, T>
// : 타입 T의 프로퍼티의 집합 K로 타입을 구성
// : 타입의 프로퍼티들을 다른 타입에 매핑 시키는 데 사용
interface PageInfo {
  title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' }
}

//NOTE - Extract<T, U>
// : T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // "a"
type T1 = Extract<string | number | (() => void), Function> // () => void

//NOTE - ReturnType<T>
// : T 함수 타입의 반환 타입을 구성
// : 함수의 반환 타입을 추론하는 데 유용
function getUser() {
  return { name: 'Alice', age: 25 }
}
type FunctionType = typeof getUser

type User = ReturnType<typeof getUser>

const user: User = { name: 'Alice', age: 25 }

//NOTE - Parameters<T>
// : T 함수 타입의 매개변수 타입을 튜플로 구성
function log(message: string, userId: number): void {
  console.log(`${userId}: ${message}`)
}

type LogParams = Parameters<typeof log>

const params: LogParams = ['Hello, world!', 1]

log(...params) // 1: Hello, world!

//NOTE - Awaited<T>
// : Awaited<T>는 Promise의 결과 타입을 추론하는 유틸리티 타입
// : 비동기 함수의 반환 타입을 처리하거나, Promise로 감싸진 값을 추출할 때 유용
async function fetchData(): Promise<string> {
  return 'Hello, world!'
}

// fetchData 함수의 반환 타입 추론
type FetchDataType = Awaited<ReturnType<typeof fetchData>>

const data: FetchDataType = await fetchData()
console.log(data) // "Hello, world!"

export {}

/*************************************************************/
