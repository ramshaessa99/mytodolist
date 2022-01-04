import React from 'react';
import Todo from "./Todo";

function TodoList({
    todos,
    handleSetDueDate,
    handleDeleteTodo,
    handleToggleCompleteTodo,
}) {
    return (
        <div className="todo-box">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleSetDueDate={handleSetDueDate}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleComplete={handleToggleCompleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;