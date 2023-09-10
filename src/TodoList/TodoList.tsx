import { useCallback } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.scss";
const TodoList = ({ todos, onRemove, toggle }: any) => {
  return (
    <div className="TodoList">
      {todos.map((element: any) => {
        return (
          <TodoListItem
            key={element.id}
            content={element}
            onRemove={onRemove}
            onToggle={toggle}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
