import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import '../styles/TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([])
    return (
        <>
            <TodoForm />
            <div className="todo-list-container">
                LISTA DE TODOs
            </div>
        </>
    )
}

export { TodoList }