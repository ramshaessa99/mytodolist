import { useTodos } from "./useTodos";
import "./App.css";
import Form from './Components/Form';
import TodoList from "./Components/TodoList";

function App() {
  const { todos, handleAddTodo, handleDeleteTodo, handleToggleCompleteTodo } =
  useTodo();
  return (
    <div className="App">
      <header>
        <h1>Ramsha's Todo Item List {inputText}</h1>
      </header>
      <Form handleAddTodo={handleAddTodo} />
       <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompleteTodo={handleToggleCompleteTodo}
      />
    </div>
  );
}
export default App;