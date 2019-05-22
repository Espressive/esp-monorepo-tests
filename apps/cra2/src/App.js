import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import pkg from '../package.json';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <h1>{pkg.name}</h1>
      </header>
    </div>
  );
}

export default App;
