
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [words, setWords] = useState<string>('')
  
  const handleClick = () => {
    setWords('Did you do your homework?');
  }

  const handleRequest = (request: string) => {
    console.log(request);
    
    if (request.includes('car')) {
      alert('No');
    }
  }

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Ask</button>
      <Child hears={words} onRequest={handleRequest} />
    </div>
  )
}

export default Parent;