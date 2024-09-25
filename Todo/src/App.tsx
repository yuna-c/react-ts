import './App.css'
import { type Todo } from './test'

function App() {
  return <TodoList todoList={[]} /> // 빈 todoList 배열을 TodoList 컴포넌트에 전달
}

//TODO - props: 함수 인자 첫번째에 객체 형태로 타입 지정
// 함수 TodoList의 첫 번째 매개변수인 props에 대해 객체 구조로 타입을 지정하여 사용
function TodoList({ todoList }: { todoList: Todo[] }) {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem {...todo} /> // todoList 배열을 순회하며 각 요소(todo)를 TodoItem 컴포넌트에 props로 전달
      ))}
    </>
  )
}

// TodoItem 컴포넌트는 todo 객체의 속성들을 받아서 렌더링
function TodoItem({ id, title, completed }: Todo) {
  return (
    <div>
      <div>{id}</div> // todo의 id를 표시
      <div>{title}</div> // todo의 제목을 표시
      <div>{completed}</div> // todo의 완료 여부를 표시
    </div>
  )
}

export default App
