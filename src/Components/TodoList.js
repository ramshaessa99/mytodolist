import React from 'react';
import Todo from "./Todo";
const TodoList = ({ todos, handleDeleteTodo, handleToggleCompleteTodo }) => {
    return (
        <div className="todo-box">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        handleDelete={handleDeleteTodo}
                        handleToggleComplete={handleToggleCompleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};
export default TodoList;