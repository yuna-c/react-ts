//NOTE - 불린 : boolean
let isBoolean: boolean
let isDone: boolean = false

//NOTE - 숫자 : number
let num: number
let integer: number = 6
let float: number = 3.14
let hex: number = 0xf00d // 61453
let binary: number = 0b1010 // 10
let octal: number = 0o744 // 484
let infinity: number = Infinity
let nan: number = NaN

//NOTE - 문자열 : string
let str: string
let red: string = 'Red'
let green: string = 'Green'
let myColor: string = `My color is ${red}`
let yourColor: string = 'Your color is ' + green

//NOTE - 배열 : Array
let fruits: string[] = ['Apple', 'Banana', 'Mango']
let fruits: Array<string> = ['Apple', 'Banana', 'Mango']

let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7]
let oneToSeven: Array<number> = [1, 2, 3, 4, 5, 6, 7]

let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3]
let array: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3]

let someArr: any[] = [0, 1, {}, [], 'str', false]

//NOTE - 인터페이스 : interface
interface IUser {
  name: string
  age: number
  isVaild: boolean
}

let userArr: IUser[] = [
  {
    name: 'Neo',
    age: 10,
    isVaild: true
  },
  {
    name: 'Lewis',
    age: 64,
    isVaild: false
  },
  {
    name: 'Evan',
    age: 123,
    isVaild: true
  }
]

//NOTE - 타입 별칭 : type
type User = {
  name: string
  age: number
  isValid: boolean
}

let userArr: User[] = [
  {
    name: 'Neo',
    age: 10,
    isValid: true
  },
  {
    name: 'Lewis',
    age: 64,
    isValid: false
  },
  {
    name: 'Evan',
    age: 123,
    isValid: true
  }
]

//NOTE - Null과 Undefined : 초기값이 없다가 들어올 때
let undefin: undefined = undefined
let nul: null = null

let stringOrNull: string | null = null
let numberOrUndefined: string | undefined = undefined

//NOTE - 모든 타입 : any
let any: any = 123
any = 'play game'
any = {}
any = null

const arr: any[] = [1, true, 'typescript']

//NOTE - void(공허하다) : 특정 함수가 리턴값이 없을때
function coding(msg: string): void {
  console.log(`Happy ${msg}`)
}

//NOTE - 유니온(Union)
// 유니온 타입(Union Type)이란 자바스크립트의 OR 연산자(`||`)와 같이 A이거나 B라는 의미의 타입
// `|` 연산자를 이용하여 타입을 여러 개 연결하는 방식을 유니온 타입 정의 방식이라고 부름

let union: string | number
union = 'Hello World'
union = 777
union = false // Error

//NOTE - 인터섹션(Intersection)
// 인터섹션 타입(Intersection Type)은 두 개 이상의 타입을 조합하여 하나의 타입으로 합치는 방식
// 자바스크립트의 AND 연산자(&&)와 비슷한 개념으로, A이면서 동시에 B인 타입을 의미
interface User {
  name: string
  age: number
}

interface Validation {
  isValid: boolean
}

const testCase2: User & Validation = {
  name: 'jisu',
  age: 30,
  isValid: true
}

//NOTE - 함수(Function)
let myFunc: (arg1: number, arg2: number) => number
// (인자: 타입) 반환값 타입
myFunc = function (x, y) {
  return x + y
}
myFunc(1, 2) // 3

let noneFunc: () => void
// 반환하지 않는 타입
noneFunc = function () {
  console.log('hihi')
}

/*************************************************************/

//NOTE - 읽기 전용 : readonly : 수정 불가
let arrA: readonly number[] = [1, 2, 3, 4]
let arrB: ReadonlyArray<number> = [2, 4, 6, 8]
arrA.push(a)
const newArr = { ...arrA, arrB }

//NOTE - 튜플 : Tuple : 길이와 값이 어느정도 정해진 배열
let tuple: [string, number]
tuple = ['a', 1]
tuple = [1, 'a'] // Error

let userA: [number, string, boolean] = [1234, 'juyoung', true]

let usersA: [number, string, boolean][]
let usersB: Array<[number, string, boolean]>
usersA = [
  [1, 'chisus', true],
  [2, 'jisu', false]
]

let tupleA: [1, number]
tupleA = [1, 2]
tupleA = [2, 3] // Error

let a: readonly [string, number] = ['rest', 123]
a[0] = 'work' // Error

//NOTE - 열거형 : enum : 여러 값을 소 카테고리로 타입으로 표현
// 숫자 변환 01234
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

// 문자
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

//NOTE - 객체 : object : Array, function타입
let obj: object = {}
let arr: object = []
let func: object = function () {}
let date: object = new Date()

interface Users {
  name: string
  age: number
}

let userA: Users = {
  name: 'juyoung',
  age: 27
}

//NOTE - 알 수 없는 타입 : unknown : 전체 집합
let u: unknown = 123
let test1: number = u // Error
let test2: number = u as number
let test3: any = u

//NOTE - Never : unknown의 반대 : 공 집합
function error(message: string): never {
  throw new Error(message)
}

const never: [] = []
never.push(3) // Error

/*************************************************************/
//NOTE - Type alias(타입 별칭) vs interface (인터페이스)
// Type alias
type ExampleType = {}
type StringType = string
type UnionType = string | number

// interface

interface ExampleInterface {
  example: string
}

/*
- TS Documents
https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220
타입 별칭(type alias)과 인터페이스(interface)는 매우 유사하며, 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능이 타입에서 사용할 수 있으며, 주요 차이점은 타입은 새로운 속성을 추가하기 위해 다시 열 수 없지만 인터페이스는 항상 확장 가능하다는 점입니다.
*/

//NOTE -  확장성(Extensibility):
// 인터페이스(interface): 재선언 가능, 두개 합쳐짐, 객체 형태
interface Hello {
  name: string
}

interface Hello {
  age: number
} // ✅ 가능, Hello 는 name 과 age 모두를 포함하게 됨

let hello: Hello = {
  name: 'string',
  age: 1
}

// 타입 별칭(type alias): 두번 선언 불가능, 객체 형태 뿐만 아니라, 유니온 타입, 튜플, 매핑된 타입 등 복잡한 타입 표현에 유리
// ex type A = B | C
type Hello2 = {
  name: string
}

type Hello2 = {
  age: number
} // 🙅‍♂️ 불가능

/*************************************************************/

//NOTE - 구조적 타입 시스템 : TypeScript
// 어떤 프로퍼티와 메서드를 가지고 있는지, 속성이 같은지
// 구조적 타입 시스템에서는 두 개체가 동일한 구조를 가지면 동일한 타입으로 간주
interface Person {
  name: string
  age: number
}

let p1: Person = { name: 'Alice', age: 25 }
let p2 = { name: 'Bob', age: 30 }

p1 = p2 // 성공: p2는 Person과 동일한 구조를 가짐

/*************************************************************/
//NOTE - 타입 어노테이션 (type annotation)
// : 사용하려고 하는 변수, 함수 등 옆에: 기호와 함께 우리가 배운 선언 가능한 타입을 넣어주기
// : 어떤 값이 어떤 타입을 참조하고 있는지 개발자가 직접 타입을 작성해서 타입스크립트에게 알려주는 행동

let name: string = 'Owen'
let age: number = 30
let isMarried: boolean = false

// built in object
let now: Date = new Date()

// array
let animals: string[] = ['cat', 'dog', 'cow']

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

let haveNothing: null = null
let nothing: undefined = undefined

//NOTE - 타입 추론
// : 코드에서 타입을 명시적으로 지정하지 않아도, 컴파일러가 코드의 문맥을 통해 타입을 자동으로 추론
// : 명시적인 타입 선언 없이도 타입 안전성을 유지
// : 변수, 함수, 객체, 배열 등 다양한 상황에서 동작하고, 제네릭 타입도 추론, 코드의 가독성과 유지 보수성

// 변수의 타입 추론
let num = 10 // number로 추론
let str = 'Hello' // string으로 추론
let bool = true // boolean으로 추론

// 배열의 타입 추론
let numbers = [1, 2, 3, 4, 5] // number[]로 추론
let strings = ['a', 'b', 'c'] // string[]로 추론

// 객체 리터럴의 타입 추론
let person = {
  name: 'Alice',
  age: 25
} // { name: string; age: number }로 추론

person.name = 'Bob' // 정상
person.age = 30 // 정상
person.age = 'thirty' // 오류: 'string' 형식은 'number' 형식에 할당할 수 없습니다.

// 함수 반환 타입 추론
function add(a: number, b: number) {
  return a + b // number로 추론
}

const result = add(5, 3) // result는 number로 추론

// 컨텍스트를 통한 타입 추론
// 함수 매개변수와 반환 타입
let add = (a: number, b: number) => a + b // (a: number, b: number) => number로 추론
// 콜백 함수의 타입 추론
let numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => {
  console.log(num) // num은 number로 추론
})

//NOTE - 왜 타입 어노테이션을 해야 할까?
// : 항상 타입 추론이 일어나는데 어떨때 타입 어노테이션을 해야 할까
// : 암묵적 타입 추론에 의존하게 되면 타입스크립트의 특징인 안전한 코드 작성 멀어짐
// number
const add = (a: number, b: number): number => {
  return a + b
}
const subtract = (a: number, b: number) => {
  // subtract의 타입은 (a, b) => void
  a - b
}

// 1. 함수가 any 타입을 리턴하고 이 값을 명확하게 해야 할 때
// 2. 어떤 변수를 선언한 이후에 다른 라인에서 초기화를 할 때
// 3. 추론할 수 없는 타입을 변수가 가지게 하려 할 때

// 1.
const json = '{"a": 1, "b": 2}'
const object = JSON.parse(json) // any 타입으로 인식 -> 타입 어노테이션 필요
console.log(object) // {a: 1, b: 2}

const object: { a: number; b: number } = JSON.parse(json) // 명시적
object.asdadsfgsdasdasdasd // 타입스크립트는 object를 any 타입으로 인식해서 이러한 에러를 찾지 못함(여기서 에러)

// 2.
const colors = ['red', 'blue', 'green']
let foundColor // 암묵적으로 any 타입을 가짐 -> 타입 어노테이션 필요
let foundColor: boolean

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === 'blue') foundColor = true
}

// 3.
let numbers = [-10, -5, 10]
let numberAboveZero = false // boolean 타입으로 타입 추론 -> 타입 어노테이션 필요 boolean | number
let numberAboveZero: boolean | number = false // 오류 사라짐

for (let i = 0; i < colors.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i] // error
}
