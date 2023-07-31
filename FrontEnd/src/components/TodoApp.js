import React, { useState } from 'react';
import App from '../Todo.css'

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>

        <br></br>
        <br></br>

        <div className="todo-app">
            <h1>Todo App</h1>
            <div className="todo-input">
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a todo"
                />
        
                <button onClick={handleAddTodo}> Add </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>

    </div>
  );
}

