import { useState } from 'react'

import Card from './components/Card';

import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  let myObj = {
    name: "Ganesh",
    roll: 24
  }
  
  let newArray = [1,2,3,4]

  return (
    <>
    <h1 className='bg-blue-400 text-black rounded-xl p-3 mb-3 '>Welocme to Global City</h1>
    <Card message="Hello!!" arr= {newArray} Obj= {myObj} city="Miami" img="https://www.lot.com/content/dam/lot/lot-com/destination-photos/usa/miami/Miami-2.coreimg.jpg/1723629374409/Miami-2.jpg"/>
    {<br></br>}
    <Card message="Hey!!" city="Dubai" img="https://static.toiimg.com/photo/40250293.cms"/>
    </>
  )
}

export default App
