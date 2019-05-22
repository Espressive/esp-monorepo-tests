import React from 'react';
import logo from './logo.svg';
import './App.css';
import pkg from '../package.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{pkg.name}</h1>
      </header>
    </div>
  );
}

export default App;
