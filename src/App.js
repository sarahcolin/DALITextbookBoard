import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextbookPosting from './textbookPosting'
import TextbookBoard from './textbookBoard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextbookBoard />
        <TextbookPosting />
      </header>
    </div>
  );
}

export default App;


