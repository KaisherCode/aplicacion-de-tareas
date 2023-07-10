import React from 'react';
import '../styles/Todos.css';
import {AiOutlineCloseCircle,AiOutlineCheck} from 'react-icons/ai';
function Todo ({text,completed}){
    return(
        <div className={completed? 'todo-container completed':'todo-container'}>
            <div className='todo-container-icons'>
                <AiOutlineCheck className='todo-icon '/>
            </div>
            <div className="todo-text">
                {text}
            </div>
            <div className="todo-container-icons">
                <AiOutlineCloseCircle className='todo-icon'/>
            </div>
        </div>
    )
}
export {Todo}