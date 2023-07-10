import React from "react";
import '../styles/TodoForm.css';

function TodoForm(props) {
    return (
        <form className="todo-form">
            <input
                className="todo-input"
                type="text"
                placeholder="Write a todo"
                name="text"
            />
            <button className="todo-button">Add todo</button>
        </form>
    )
}
export { TodoForm }