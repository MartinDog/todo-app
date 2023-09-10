import "./App.css";
import TodoInsert from "./Insert/TodoInsert";
import TodoList from "./TodoList/TodoList";
import TodoTemplate from "./TodoTemplate";
import { useState, useRef, useCallback } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 알기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들기",
      checked: true,
    },
  ]);
  const onRemove = useCallback(
    (id: any) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const nextId = useRef(4);
  const toggle = useCallback(
    (id: number) => {
      console.log(id);
      setTodos(
        todos.map((todo) => {
          return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
        })
      );
    },
    [todos]
  );
  const onInsert = useCallback(
    (text: any) => {
      setTodos(
        todos.concat({
          id: nextId.current,
          text: text,
          checked: false,
        })
      );
      nextId.current += 1;
    },
    [todos]
  );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} toggle={toggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
