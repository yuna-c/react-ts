import { useEffect, useState } from 'react'
import { getTodos, type Todo } from './service'
import './App.css'

type ToggleTodo = Omit<Todo, 'title'>

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

  //SECTION - 2. POST(create) 투두리스트 추가하기
  const handleAddTodo = (newTodo: Todo) => {
    setTodoList((prev) => [...prev, newTodo])
  }

  //SECTION - 3. DELETE(delete) 투두리스트 삭제하기
  const handleDeleteTodo = async (id: Todo['id']) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE'
    })
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  //SECTION - 4. PATCH(update) 투두리스트 업데이트
  const handleUpdateTodo = async ({ id, completed }: ToggleTodo) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !completed
      })
    })

    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !completed
          }
        }
        return todo
      })
    )
  }

  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo} />
    </>
  )
}

//NOTE - Todo 리스트 렌더링 컴포넌트
type TodoListProps = {
  todoList: Todo[]
  onDeleteTodo: (id: Todo['id']) => void
  onUpdateTodo: (toggleTodo: ToggleTodo) => void
}
function TodoList({ todoList, onDeleteTodo, onUpdateTodo }: TodoListProps) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />
      ))}
    </ul>
  )
}

//NOTE - 각 Todo 항목을 렌더링하는 컴포넌트
type TodoListItemProps = Todo & {
  onDeleteTodo: (id: Todo['id']) => void
  onUpdateTodo: (toggleTodo: ToggleTodo) => void
}
function TodoItem({ id, title, completed, onDeleteTodo, onUpdateTodo }: TodoListItemProps) {
  return (
    <>
      <li style={{ margin: '10px', display: 'flex' }}>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
        <span style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => {
              onUpdateTodo({ id, completed })
            }}
            style={{ padding: '0.1em 0.5em', backgroundColor: '#438dee', color: '#fff' }}
          >
            완료
          </button>
          <button onClick={() => onDeleteTodo(id)} style={{ padding: '0.1em 0.5em', backgroundColor: '#eb2020', color: '#fff' }}>
            삭제
          </button>
        </span>
      </li>
    </>
  )
}

//NOTE - 새로운 Todo를 추가하는 입력 폼 컴포넌트
type TodoFormProps = { onAddTodo: (newTodo: Todo) => void }
function TodoForm({ onAddTodo }: TodoFormProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title === '') return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    await fetch(`http://localhost:4000/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })

    // 새 Todo 상위 컴포넌트에 전달
    onAddTodo(newTodo)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="새 Todo 입력" onChange={(e) => setTitle(e.target.value)} />
      <button type="submit" style={{ padding: '0.1em 0.5em', backgroundColor: '#000000a1', color: '#fff' }}>
        추가하기
      </button>
    </form>
  )
}
export default App
