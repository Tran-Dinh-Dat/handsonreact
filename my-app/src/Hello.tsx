import React, { useState, SyntheticEvent } from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

function Hello({name, enthusiasmLevel = 1}: Props) {
  const [currentEnthusiasm, setCurrentEnthusiasm] = useState<number>(enthusiasmLevel || 1);

  let onIncrement = (event: SyntheticEvent) => {
    console.log(event.target);
    setCurrentEnthusiasm(currentEnthusiasm + 1)
  }

  let onDecrement = (event: SyntheticEvent) => {
    console.log(event.target);
    setCurrentEnthusiasm(currentEnthusiasm - 1)
  }

  if (currentEnthusiasm <= 0) {
    throw new Error('You could be a little more enthusiastic.');
  }

  return (
    <div className='hello'>
      <div className='greeting'>
        Hello {name + getExclamationMarks(currentEnthusiasm)}
      </div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}