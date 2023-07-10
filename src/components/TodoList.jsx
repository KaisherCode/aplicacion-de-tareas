import React from 'react';
import { TodoForm } from './TodoForm';
import '../styles/TodoList.css';

function TodoList(){
    return(
        <>
            <TodoForm/>
            <div className="todo-list-container">
                LISTA DE TODOs
            </div>
        </>
    )
}

export {TodoList}