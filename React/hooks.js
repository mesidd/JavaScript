import { useState } from 'react'

import './App.css'

function App() {

  let [count, setCount] = useState(0)
  
  // const countValue = document.querySelector('#total')

  const addValue = () => {
    count += 1 
    // countValue.innerHTML = count
    // console.log(count); 
    setCount(count)  
  }

  const removeValue = () => {
    count -= 1
    // console.log(count);
    setCount(count)
  }

  return (
    <>
  {/* <h2>Count Value : <span id='total'>6</span></h2> */}

    <h1>Learning ReactJS</h1>
    <h2>Count Value : {count}</h2>

    <button onClick={ addValue}>Add Value</button> 
    <button onClick={removeValue}>Remove Value</button>
    
    </> 
  )
}

export default App
