import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './todo';
import '../styles/TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if (todo.text.trim()) {
            todo.text = todo.text.trim()
            const updatedTodos = [todo, ...todos]
            setTodos(updatedTodos)
        }
    }
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id != id)
        setTodos(updatedTodos)
    }
    const completeTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <>
            <TodoForm onSubmit={addTodo} />
            <div className="todo-list-container">
                {
                    todos.map((todo) => 
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo}
                        />
                    )
                }
            </div>
        </>
    )
}

export { TodoList }