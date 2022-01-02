import React from 'react';

function Todo({todo,handleSetDueDate, handleDeleteTodo, handleToggleComplete}) {
    const handlePickDate = (a) => {
        handleSetDueDate(todo.id, e.target.value)
    }

    return (
        <div className="todo">
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleComplete(todo.id)}
        />
        <li className={'todo-item ${todo.completed ? "todo-item__checked" : ""}'}>
        {todo.text}
        </li>
        <input type="date" value={todo.dueDate} onChange={() => } />
        <button onClick={() => handleDeleteTodo(todo.id)} className="trash-btn">
        </button>
        </div>
    
    );
}

export default Todo;
