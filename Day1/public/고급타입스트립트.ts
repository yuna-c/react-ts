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
