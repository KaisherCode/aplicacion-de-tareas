import React from "react";

function TodoForm(props) {
    return (
        <form className="todo-form">
            <input
                className="todo-input"
                type="text"
                placeholder="Write a todo"
                name="text"
            />
            <button className="todo-button">Agregar tarea</button>
        </form>
    )
}
export { TodoForm }