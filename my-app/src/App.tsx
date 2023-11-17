import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Greeter from './Greeter';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Button />
      <div>
        <Greeter first="Dat" last='Tran Dinh'/>
        <Hello name='Dat' enthusiasmLevel={1}/>
      </div>
    </div>
  );
}

export default App;
