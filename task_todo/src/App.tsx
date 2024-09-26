import { useEffect, useState } from 'react'
import { getTodos, type Todo } from './service'
import './App.css'

function App() {
  //SECTION - 1. READ(get) 투두리스트 가져오기
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos()
      setTodoList(data)
    }
    fetchTodos()
  }, [])

  return (
    <>
      <TodoForm />
      <TodoList todoList={todoList} />
    </>
  )
}

//NOTE - Todo 리스트 렌더링 컴포넌트
type TodoListProps = { todoList: Todo[] }
function TodoList({ todoList }: TodoListProps) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

//NOTE - 각 Todo 항목을 렌더링하는 컴포넌트
type TodoListItemProps = Todo
function TodoItem({ id, title, completed }: TodoListItemProps) {
  return (
    <>
      <li style={{ margin: '10px', display: 'flex' }}>
        {title}
        <span style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '0.1em 0.5em', backgroundColor: '#438dee', color: '#fff' }}>완료</button>
          <button style={{ padding: '0.1em 0.5em', backgroundColor: '#eb2020', color: '#fff' }}>삭제</button>
        </span>
      </li>
    </>
  )
}

//NOTE - 새로운 Todo를 추가하는 입력 폼 컴포넌트
type TodoFormProps = {}
function TodoForm() {
  return (
    <form>
      <input type="text" />
      <button type="submit" style={{ padding: '0.1em 0.5em', backgroundColor: '#000000a1', color: '#fff' }}>
        추가하기
      </button>
    </form>
  )
}
export default App
