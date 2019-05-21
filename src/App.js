import React from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import Styles from './App.module.scss';

function App() {
  return (
    <div className={Styles.App}>
      <Header />
      <p>Hey</p>
      <h1>Hey</h1>
    </div>
  );
}

export default App;
