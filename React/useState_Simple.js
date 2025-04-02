// App.jsx

import { useState } from 'react'

import Card from './components/Card';

import './App.css'

function App() {

  const [ count, setCount ] = useState(0)

  const add = () => {
    setCount( count + 1 ) 
  }
  
  const subtract = () => {
    setCount( count - 1)
  }

  return (
    <>
    <h1> Value: {count} </h1>
    <div className = 'flex gap-10 mt-4'>
    <Card value = "Add" type = {add}/>
    <Card value = "Subtract" type = {subtract}/>
    </div>
    </>
  )
}

export default App

// Card.jsx

import React, { useState } from "react";

function Card({value, type}) {
  
  return (
    <div>
      <button onClick = {type}> {value} </button>
    </div>
  )
}

export default Card
