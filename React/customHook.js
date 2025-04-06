// CustomHook Definition
import  {useState} from "react";

function CustomHook(){

  const [ count, setCount ] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return [increment, decrement, reset, count]

}

export default CustomHook

// Usage
import React from "react";
import CustomHook from "./CustomHook";

function HookTest(){

  const [increment, decrement, reset, count] = CustomHook()

  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default HookTest
