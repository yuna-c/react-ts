import { useEffect, useState } from 'react'
import { getTodos, type Todo } from './test'
import './App.css'

function App() {
  //SECTION - 3. Todo 불러오는 로직
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    getTodos().then((data) => setTodoList(data))
  }, [])

  const [title, setTitle] = useState('') // string

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value)
    setTitle(e.target.value) // 세터 함수
    console.log(title)
  }

  return (
    <div id="wrap">
      {/* 빈 todoList 배열을 TodoList 컴포넌트에 전달 */}
      <TodoList todoList={todoList} />

      {/* 입력 */}
      {/* <input type="text" onChange={(e) => {}} /> : 가짜 함수 만들어서 호버하면 타입이 나오는거 복붙*/}
      <input type="text" value={title} onChange={handleTitleChange} />
    </div>
  )
}

//TODO - props: 함수 인자 첫번째에 객체 형태로 타입 지정
//SECTION - 1. 함수 TodoList의 첫 번째 매개변수인 props에 대해 객체 구조로 타입을 지정하여 사용
type TodoListProps = { todoList: Todo[] }
function TodoList({ todoList }: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => (
        // todoList 배열을 순회하며 각 요소(todo)를 TodoItem 컴포넌트에 props로 전달
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  )
}

//SECTION - 2. TodoItem 컴포넌트는 todo 객체의 속성들을 받아서 렌더링(직접 그려지는)
type TodoItemProps = Todo
function TodoItem({ id, title, completed }: TodoItemProps) {
  return (
    <div>
      <div>id: {id}</div>
      {/* todo의 id를 표시 */}
      <div>title: {title}</div>
      {/* todo의 제목을 표시 */}
      <div>completed : {`${completed}`}</div>
      {/* todo의 완료 여부를 표시 */}
    </div>
  )
}

export default App
