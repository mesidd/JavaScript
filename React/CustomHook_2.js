import React from "react";
import CustomHook from "./CustomHook";

function HookTest(){

  const [increment, decrement, reset, count, value] = CustomHook(1, 3)

  return(
    <div>
      <h1>Count : {value}</h1>
      <h1>Value : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

}

export default HookTest

// Definition

import  {useState} from "react";

function CustomHook(initialCount, value){

  const [ count, setCount ] = useState(initialCount)

  const increment = () => {
    setCount(count + value)
  }
  const decrement = () => {
    setCount(count - value)
  }

  const reset = () => {
    setCount(initialCount)
  }

  return [increment, decrement, reset, count, value]

}

export default CustomHook
