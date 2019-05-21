import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.scss';
import Router from './Router';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router />
    </div>
  );
}

export default App;
