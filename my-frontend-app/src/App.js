import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to UI</h1>
        <p>This is a simple React frontend deployed using Jenkins Tanusha 🚀</p>
        <button onClick={() => alert('Hello from Jenkins React App!')}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
