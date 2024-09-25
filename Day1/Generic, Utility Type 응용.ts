/*************************************************************/

//NOTE - Generic, Utility Type 응용하기
// : Todo

/*************************************************************/

// 기초가 되는 Todo 타입
type Todo = {
  id: number
  title: string
  completed: boolean
}

// Pick과 Omit 타입을 이용해서 각각 기능에 맞는 타입들을 만들기
type TodoId = Pick<Todo, 'id'>

type CreateTodo = Pick<Todo, 'title' | 'completed'>
type CreateTodo = Omit<Todo, 'id'>

type ToggleTodo = Pick<Todo, 'id' | 'completed'>
type ToggleTodo = Omit<Todo, 'title'>

// Partial Type도 이용
type EditTodo = Partial<Todo> & TodoId

// 함수를 기반으로 타입을 빼오기
async function exampleFunction(): Promise<number> {
  return new Promise((resolve) => {
    resolve(42)
  })
}
