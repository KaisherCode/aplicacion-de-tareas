import React from 'react';
import '../styles/Todos.css';
function Todo ({text}){
    return(
        <div className="todo-container">
            <div className="todo-text">
                {text}
            </div>
            <div className="todo-icon">
                Eliminar
            </div>
        </div>
    )
}
export {Todo}