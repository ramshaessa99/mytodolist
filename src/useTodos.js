import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e, text) => {
    e.preventDefault();

    setTodos((prev) => [...prev, { text, completed: false, id: uuidv4() }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((e1) => e1.id !== id));
  };

  const handleToggleCompleteTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleCompleteTodo,
  };
};
