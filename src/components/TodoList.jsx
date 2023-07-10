import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import '../styles/TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([])
    return (
        <>
            <TodoForm />
            <div className="todo-list-container">
                {/* Cada todo se va representar como un objeto en el arreglo (array). */
                    todos.map((todo) => /* todo es un objeto */
                        <Todo
                            text={todo.text}
                            completed={todo.completed}
                        />
                    )
                }
            </div>
        </>
    )
}

export { TodoList }