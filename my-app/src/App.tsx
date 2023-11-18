import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Greeter from './Greeter';
import Hello from './Hello';
import FruitList from './FruitList';
import Parent from './components/Parent';

function App() {
  const data = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'orange' },
    { id: 3, name: 'blueberry' },
    { id: 4, name: 'banana' },
    { id: 5, name: 'kiwi' },
  ];
  return (
    <div className="App">
      <Button />
      <div>
        <Greeter first="Dat" last='Tran Dinh'/>
        <Hello name='Dat' enthusiasmLevel={1}/>
        <FruitList fruits={data}/>
        <Parent/>
      </div>
    </div>
  );
}

export default App;
