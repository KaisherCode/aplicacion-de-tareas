import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/TodoForm.css';
import { AiOutlinePlusCircle } from 'react-icons/ai'

function TodoForm(props) {

  const [input, setInput] = useState('')
  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSend = (event) => {
    event.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTodo)
  }

  return (
    <form className="todo-form" onSubmit={handleSend}>
      <input
        required
        className="todo-input"
        type="text"
        placeholder="Write a todo"
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button"><AiOutlinePlusCircle /></button>
    </form>
  )
}
export { TodoForm }