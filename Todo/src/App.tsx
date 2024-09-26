import { useEffect, useState } from 'react'
import { getTodos, type Todo } from './test'
import './App.css'

function App() {
  //SECTION - 3. 비동기적으로 Todo 불러오는 로직
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    getTodos().then((data) => setTodoList(data))
  }, [])

  //SECTION - 4. create Todo 항목 추가 기능 구현
  const [title, setTitle] = useState('') // string

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // const target = e.target as HTMLInputElement // 타입캐스팅
    console.log(e.target.value)
    setTitle(e.target.value) // 세터 함수
    console.log(title)
  }

  const handleAddTodo = async () => {
    if (title === '') return
    const newTodo: Todo = { id: crypto.randomUUID(), title: title, completed: false }
    await fetch('http://localhost:4000/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })

    setTodoList((prev) => [...prev, newTodo])
    setTitle('')
  }

  //SECTION - 5. delete Todo 항목 삭제 기능 구현
  const handleDeleteTodo = (id: Todo['id']) => {
    fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE'
    })
    setTodoList((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div id="wrap">
      {/* 빈 todoList 배열을 TodoList[] 컴포넌트에 전달 */}
      <TodoList todoList={todoList} onDeleteClick={handleDeleteTodo} />

      {/* 입력 */}
      {/* <input type="text" onChange={(e) => {}} /> : 가짜 함수 만들어서 호버하면 타입이 나오는거 복붙 */}

      <input
        type="text"
        value={title} // 기본값 설정으로 undefined 방지
        onChange={handleTitleChange}
      />
      <button onClick={handleAddTodo}>등록</button>
    </div>
  )
}

//TODO - props: 함수 인자 첫번째에 객체 형태로 타입 지정
//SECTION - 1. 함수 TodoList의 첫 번째 매개변수인 props에 대해 {객체} 구조로 타입을 지정하여 사용
type TodoListProps = {
  todoList: Todo[]
  onDeleteClick: (id: Todo['id']) => void
}
function TodoList({ todoList, onDeleteClick }: TodoListProps) {
  return (
    <div>
      {todoList.map((todo) => (
        // todoList 배열을 순회하며 각 요소(todo)를 TodoItem 컴포넌트에 props로 전달
        <TodoItem key={todo.id} {...todo} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  )
}

//SECTION - 2. TodoItem 컴포넌트는 todo 객체의 속성들을 받아서 렌더링(직접 그려지는)
type TodoItemProps = Todo & {
  //TODO - 함수 타입 추가
  onDeleteClick: (id: Todo['id']) => void
}
function TodoItem({ id, title, completed, onDeleteClick }: TodoItemProps) {
  return (
    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '10px', paddingBottom: '10px' }}>
      <div>id: {id}</div>
      {/* todo의 id를 표시 */}
      <div>title: {title}</div>
      {/* todo의 제목을 표시 */}
      <div>completed : {`${completed}`}</div>
      {/* todo의 완료 여부를 표시 boolean이라 표기가 안되어서 string으로 만들어 줘야함 */}
      <button
        onClick={() => {
          onDeleteClick(id)
        }}
      >
        삭제
      </button>
    </div>
  )
}

export default App
