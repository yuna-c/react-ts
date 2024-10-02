//NOTE - 1. Todo type setting
export type Todo = {
  id: string
  title: string
  completed: boolean
}

//NOTE - 2. 비동기 로직
export const getTodos = async () => {
  const response = await fetch(`http://localhost:4000/todos`)
  const data: Todo[] = await response.json()
  return data
}
