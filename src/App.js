import React from 'react';
import './App.css';
import civLogo from './civ7-logo.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={civLogo} className="App-logo" alt="Civilization VII Logo" />
        <h1>Civilization VII</h1>
        <p>Explora, conquista y forja tu imperio en la nueva era de estrategia.</p>
        <a
          className="App-button"
          href="https://civilization.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saber Más
        </a>
      </header>
    </div>
  );
}

export default App;
