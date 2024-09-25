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

/*************************************************************/

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

/*************************************************************/

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

/*************************************************************/
