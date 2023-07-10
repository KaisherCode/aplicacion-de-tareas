import React from 'react';
import '../styles/Todos.css';
import { AiOutlineCloseCircle, AiOutlineCheck } from 'react-icons/ai';
function Todo({ id, text, completed, todoComplete, deleteTodo }) {
    return (
        <div className={completed ? 'todo-container completed' : 'todo-container'}>
            <div className='todo-container-icons'>
                <AiOutlineCheck className='todo-icon ' />
            </div>
            <div
                className="todo-text"
                onClick={() => todoComplete(id)}
            >
                {text}
            </div>
            <div
                className="todo-container-icons"
                onClick={() => deleteTodo(id)}
            >
                <AiOutlineCloseCircle className='todo-icon' />
            </div>
        </div>
    )
}
export { Todo }