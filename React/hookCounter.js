import React, { useState } from 'react';

const HookCounter = () => {

  const [ count, setCount ] = useState(10);
  return (
    <div>
      <button onMouseEnter={()=> setCount(count + 5)}>Hover {count}</button>
      <br /> <br />
      <button onClick={()=> setCount(count + 5)}>Click {count}</button>
    </div>
  );
};

export default HookCounter;
