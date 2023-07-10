import React from "react";

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