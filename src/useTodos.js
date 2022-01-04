import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useTodos = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
        setTodos((prev) =>
            prev.concat({
                text,
                completed: false,
                id: uuidv4(),
                dueDate: "",
                creationDate: Date.now(),
            }))
    };

    const handleSetDueDate = (id, dueDate) => {
        setTodos((prev) => {
            prev.map((item) => {
                if (item.id == id) {
                    return {
                        ...item,
                        dueDate,
                    };
                }
                return item;
            });
        });
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
        handleSetDueDate,
        handleDeleteTodo,
        handleToggleCompleteTodo,
    };
};


