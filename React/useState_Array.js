import React,{useState} from 'react'

const HookName = () => {

const [ items, setItems ] = useState([])

const additems = () => {
  setItems([...items, {
    id: items.length,
    value: Math.floor(Math.random() * 10) + 1
  }])
}

  return(

    <div>
    <button onClick={additems}>Click</button>
    {items.map(item => (
      <p key={item.id} >{item.value}</p>
    ))} 
    </div>

  )
}

export default HookName
