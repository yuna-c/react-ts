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
