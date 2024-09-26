/*************************************************************/

//NOTE - 고급 타입스크립트

/*************************************************************/

//NOTE - 조건부 타입
// : TypeScript에서 extends(===) 키워드를 사용
// : 특정 조건에 따라 타입을 정의할 수 있는 기능
// : 삼항 연산자(? :)와 비슷한 방식으로 작동

// : 타입 체크를 더욱 정밀,  타입에 따라 다른 로직을 적용,
// : 특정 타입의 변수만 허용, 타입에 따라 다른 처리를 할 수 있는 유연성을 제공
// : 복잡한 데이터를 사용하는 코드의 타입 안전성을 높일 수 있음

type IsString<T> = T extends string ? 'string' : 'not string'

type A = IsString<string> // "string"
type B = IsString<number> // "not string"

// : IsString 타입은 입력 타입 T가 string인 경우 "string"을 반환
// : 그렇지 않은 경우 "not string"을 반환

// - 조건부 타입의 활용 예시
type IsArray<T> = T extends any[] ? true : false

type Test1 = IsArray<number[]> // true
type Test2 = IsArray<string> // false

// - 함수에서의 활용
function process<T>(value: T): T extends string ? string[] : T[] {
  return (typeof value === 'string' ? value.split('') : [value]) as any
}

const result1 = process('hello') // string[]
const result2 = process(123) // number[]

/*************************************************************/

//NOTE - 고급 제네릭 기법
// : 재사용 가능한 컴포넌트 만들기
// : 타입을 일반화하여 다양한 타입을 사용할 수 있게 해주는 방법

// - 제네릭 인터페이스
// : GenericIdentityFn 인터페이스는 제네릭 타입을 사용하여 함수의 매개변수와 반환 타입을 동일하게 유지
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity

// - 제네릭 클래스
// : GenericNumber 클래스는 숫자 타입뿐만 아니라 다른 타입에서도 사용
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x, y) => x + y

// - 제네릭 제약 조건 (Generic Constraints) : 특정 조건(extends로 if문 걸기)
// : T는 length 프로퍼티를 반드시 가져야함
// : Generic안에서 extends는 if else
function logLength<T extends { length: number }>(arg: T): T {
  console.log(arg.length)
  return arg
}

logLength('Hello') // 출력: 5
logLength([1, 2, 3]) // 출력: 3

// - 맵드 타입 (Mapped Types)
// : 기존 타입의 각 프로퍼티를 다른 타입으로 변환하여 새로운 타입을 생성
// : Readonly와 Optional 맵드 타입은 Person 타입을 각각 읽기 전용과 선택적으로 변환
type Readonly<T> = {
  readonly [P in keyof T]: T[P] // key/value를 모두 제네릭 타입으로 계산해서 새로운 타입으로 변환
}

type Optional<T> = {
  [P in keyof T]?: T[P]
}

type Person = {
  name: string
  age: number
}

type ReadonlyPerson = Readonly<Person>
type OptionalPerson = Optional<Person>

// - 고급 제네릭 타입 예시
// -- 제네릭 함수
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

const mergedObj = merge({ name: 'Alice' }, { age: 25 })
console.log(mergedObj) // { name: "Alice", age: 25 }

// -- 제네릭 인터페이스
interface Repository<T> {
  getAll(): T[]
  getById(id: number): T
}

class UserRepository implements Repository<User> {
  private users: User[] = []

  getAll(): User[] {
    return this.users
  }

  getById(id: number): User {
    return this.users.find((user) => user.id === id)
  }
}

interface User {
  id: number
  name: string
}

const userRepository = new UserRepository()
userRepository.getAll()

// -- 제네릭 클래스
class Stack<T> {
  private items: T[] = []

  push(item: T) {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }
}

const stack = new Stack<number>()
stack.push(10)
console.log(stack.pop()) // 10
