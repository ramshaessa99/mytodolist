import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleDeleteTodo, handleToggleCompleteTodo }) => {
  return (
    <div className="todo-box">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDeleteTodo}
            handleToggleComplete={handleToggleCompleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
