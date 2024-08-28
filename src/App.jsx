import React, { useState, useEffect } from 'react';
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

  // Save todos to localStorage whenever the todoItems state changes
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  const onButtonClick = (name, dueDate) => {
    if (!name || !dueDate) {
      alert('Please enter both a task and a due date.');
      return;
    }
    const newTodo = {
      name: name,
      dueDate: dueDate,
      id: Date.now(), // Use timestamp as a unique ID
    };
    setTodoItems([...todoItems, newTodo]);
  };
  
  const handleDelete = (id) => {
    setTodoItems(todoItems.filter((x) => x.id !== id));
  };

  return (
    <div>
      <center>
        <Hd />
        <div className="container">
          <Addtodo onButtonClick={onButtonClick} />
          {todoItems.length === 0 && <Welcome />} 
          <Todoitems todoitems={todoItems} handleDelete={handleDelete} />
        </div>
      </center>
    </div>
  );
}

export default App;
