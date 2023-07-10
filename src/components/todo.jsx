import React from 'react';
import '../styles/Todos.css';
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai';

function Todo({ id, text, completed, completeTodo, deleteTodo }) {
    return (
        <div className={completed ? 'todo-container completed' : 'todo-container'}>
            <div className='todo-container-icons'>
                <AiOutlineCheck className='todo-icon ' />
            </div>
            <div
                className="todo-text"
                onClick={() => completeTodo(id)}
            >
                {text}
            </div>
            <div
                className="todo-container-icons"
                onClick={() => deleteTodo(id)}
            >
                <AiFillDelete className='todo-icon' />
            </div>
        </div>
    )
}
export { Todo }