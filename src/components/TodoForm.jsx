import React, {useState} from "react";
import '../styles/TodoForm.css';

function TodoForm(props) {
    const [input,setInput]=useState('') /* Pasamos el valor inicial, que va ser una cadean de caracteres vacía. */
    const handleChange =(event)=>{
        //console.log('Escribiendo...')
        setInput(event.target.value)
        //console.log(event.target.value)
    }
    const handleSend = (event) =>{
        event.preventDefault()/** Permite que no se cargue la aplicación */
        //console.log('Enviando form')
        const newTodo = {
            id:'3434',
            text:input,
            completed:false,
        }
    }
    return (
        <form className="todo-form" onSubmit={handleSend}>
            <input
                className="todo-input"
                type="text"
                placeholder="Write a todo"
                name="text"
                onChange={handleChange}
            />
            <button className="todo-button">Add todo</button>
        </form>
    )
}
export { TodoForm }