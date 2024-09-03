import React, { useState, useEffect, useRef } from 'react';
import Hd from './components/Hd';
import Addtodo from './components/Addtodo';
import Todoitems from './components/Todoitems';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  // Initialize state directly from localStorage
  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem('todoItems');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const todoName = useRef(); //
  const todoDate = useRef();

  // Save todos to localStorage whenever the todoItems state changes
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  const onButtonClick = (event) => {
    event.preventDefault();
    const task = todoName.current.value;
    const date = todoDate.current.value;

    if (!task) {
      alert("Please enter a task");
      return;
    }

    const id = new Date().getTime();
    const newTodo = { id, name: task, dueDate: date };
    setTodoItems([...todoItems, newTodo]);
    
    // Clear the input fields after adding the task
    todoName.current.value = '';
    todoDate.current.value = '';
  };

  const handleDelete = (id) => {
    setTodoItems(todoItems.filter((x) => x.id !== id));
  };

  return (
    <div>
      <center>
        <Hd />
        <div className="container">
          <Addtodo onButtonClick={onButtonClick} todoName={todoName} todoDate={todoDate} />
          {todoItems.length === 0 && <Welcome />} 
          <Todoitems todoitems={todoItems} handleDelete={handleDelete} />
        </div>
      </center>
    </div>
  );
}

export default App;
