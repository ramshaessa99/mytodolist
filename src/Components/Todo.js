import React from "react";
const Todo = ({ todo, handleDelete, handleToggleComplete }) => {
  return (
    <div className="todo">
      <li className={'todo-item ${todo.completed ? "completed" : ""}'}>
        {todo.text}
      </li>
      <button
        onClick={() => handleToggleComplete(todo.id)}
        className="complete-btn"
      >
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => handleDelete(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
