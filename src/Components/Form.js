import { useState } from "react";

function Form({ handleAddTodo }) {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        handleAddTodo(e, inputText);
        setInputText("");
    }
    return (
        <form>
            <input value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input" />
            <DatePicker></DatePicker>
            <button
                onClick={handleSubmit}
                className="todo-button"
                type="submit">
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};
export default Form;