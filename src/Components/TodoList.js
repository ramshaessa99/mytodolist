import React from 'react';
import Todo from "./Todo";
const TodoList = ({ todos, handleDeleteTodo, handleToggleCompleteTodo }) => {
    const reverseTodoList = TodoList.reverse();
    {
        reverseTodoList.map((item) => {
        })
    }

    function reverse(object1, object2) {
        let t1 = moment(object1.event_name)
        let t2 = moment(object2.event_name)
        if (t2.isBefore(t1)) {
            return -1
        } else if (t1.isBefore(t2)) {
            return 1
        } else {
            return 0
        }
    }

    tabRow() {
        let events = this.state.event_name
        let events_reverse = events.sort(reverse_event)
        return events_reverse.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }
}
return (
    <div className="todo-box">
        <ul className="todo-list">
            {todos.sort((a, b) => a. > b.itemM ? 1 : -1)
                .map(todo => (
                    <Todo
                        onClick={() => {
                            console.log(todo);
                        }}
                        todo={todo}
                        key={todo.id}
                        handleDelete={handleDeleteTodo}
                        handleToggleComplete={handleToggleCompleteTodo}
                    />

        let { items } = this.state;
            let to = 0;
            let from = 0;
            items = items.map((item, index) => {
            if (item.id === id) {
                item.completed = true;
            from = index;
            }
            return item;
            });
            items.splice(to, 0, items.splice(from, 1)[0]);

                ))}
        </ul>
    </div>
);

export default TodoList;