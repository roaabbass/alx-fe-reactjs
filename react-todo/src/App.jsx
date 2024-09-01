// src/App.jsx
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      
      <div>
        <button onClick={toggleInputVisibility}>
          {isInputVisible ? 'Hide Input' : 'Show Input'}
        </button>
        {isInputVisible && (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
        )}
      </div>
    </div>
  );
};

export default App;
