import React, { useState } from 'react';

interface ChildProps {
  hears: string;
  onRequest: (request: string) => void
}

function Child({hears, onRequest}: ChildProps) {
  const handleClick = () => {
    onRequest('Can I have the car?');
  }

  return (
    <div>
      <h2>Child</h2>
      <p>{hears}</p>
      <button onClick={handleClick}>Ask for the car</button>
    </div>
  )
}

export default Child;