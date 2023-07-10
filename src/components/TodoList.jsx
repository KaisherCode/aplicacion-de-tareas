import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './todo';
import '../styles/TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        //console.log('Added todo')
        //console.log(todo)
        if (todo.text.trim()) {
            todo.texto = todo.text.trim()
            const updatedTodos = [todo, ...todos]
            setTodos(updatedTodos)
        }
    }
    return (
        <>
            <TodoForm onSubmit={addTodo} />
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