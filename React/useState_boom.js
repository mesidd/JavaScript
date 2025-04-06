import React, {useState} from 'react'

const reducer = (initial) => ( state, action ) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initial 
    default:
      return state
  }
}

function CounterOne() {

  const [ count, dispatch ] = useReducer(reducer(0), 0)
  const [ count1, dispatch1 ] = useReducer(reducer(5), 5) // initialising differnt initialstate

  return (
       <div>
      <h1>Count - {count}</h1>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
      <div>
      <h1>Count - {count1}</h1>
      <button onClick={()=> dispatch1('increment')}>Increment</button>
      <button onClick={()=> dispatch1('decrement')}>Decrement</button>
      <button onClick={()=> dispatch1('reset')}>Reset</button>
      </div>
    </div>
  )
}

