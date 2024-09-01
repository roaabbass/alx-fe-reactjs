// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList'; // Import TodoList component

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
};

export default App;
