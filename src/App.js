import React from 'react';
import Lista from './Lista.js';
import { useState } from 'react';
import './App.css';
import TaskList from './Listatareas.js';

function App() {
  const [lista, setLista] = useState([]); // (B-1)
  const manejarSumarItem = addItem => {
    setLista([...lista, addItem]); // (B-2)
  };
  
  return (
    <div className="App">
    <Lista manejarSumarItem={manejarSumarItem}/>
    <TaskList lista={lista} setLista={setLista} />
    </div>
  );
}

export default App;
