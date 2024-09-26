/*************************************************************/

//NOTE - 타입 좁히기 (Type Narrowing)
// : 변수의 타입을 보다 구체적인 타입으로 좁히는 과정
// : 정확한 타입 검사와 안전한 코드를 작성

/*************************************************************/

// : 유니온 타입(number | string)으로 인자를 받는 상황에서 해당 타입이 string인 경우만 처리를 해주어야 하는 경우는 어떻게 하면 될까

//NOTE - 타입 가드 (Type Guards)
// : 특정 조건에 따라 변수의 타입을 좁히는 방법
// : 조건문 내에서 변수의 타입을 좁히기 위해 typeof, instanceof, 사용자 정의 타입 가드 등을 사용

// - typeof를 이용한 타입 가드
function print(value: string | number) {
  if (typeof value === 'string') {
    console.log(`String: ${value}`)
  } else {
    console.log(`Number: ${value}`)
  }
}

print('Hello') // String: Hello
print(123) // Number: 123

// - instanceof를 이용한 타입 가드
class Dog {
  bark() {
    console.log('Woof!')
  }
}

class Cat {
  meow() {
    console.log('Meow!')
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark()
  } else {
    animal.meow()
  }
}

makeSound(new Dog()) // Woof!
makeSound(new Cat()) // Meow!

// - in 연산자를 이용한 타입 가드
// : in 연산자를 사용하여 객체에 특정 프로퍼티가 있는지 확인함으로써 타입을 좁힘
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim()
  } else {
    animal.fly()
  }
}

const fish: Fish = { swim: () => console.log('Swimming') }
const bird: Bird = { fly: () => console.log('Flying') }

move(fish) // Swimming
move(bird) // Flying

// - 타입 좁히기를 통한 안전한 코드 작성
// : 변수가 특정 타입임을 보장
// : 컴파일러가 코드를 더 정확하게 분석하고, 타입 오류를 사전에 방지
function formatValue(value: string | number | boolean) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  } else if (typeof value === 'number') {
    return value.toFixed(2)
  } else {
    return value ? 'TRUE' : 'FALSE'
  }
}

console.log(formatValue('hello')) // HELLO
console.log(formatValue(3.14159)) // 3.14
console.log(formatValue(true)) // TRUE
