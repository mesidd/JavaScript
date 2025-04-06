import React,{useReducer} from "react";

const initialState = 0

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return state + action.value
    case 'decrement':
      return state +  action.value
    case 'reset':
      return initialState
    default:
      return initialState
  }
}

function CounterTwo(){
  const [ count, dispatch ] = useReducer( reducer, initialState )
  return(
    <div>
      <h2> Count : {count} </h2>
      <button onClick = { () => dispatch( {type: 'increment', value: 1 } )}> Increment </button>
      <button onClick = { () => dispatch( {type: 'decrement', value: -1 } )}> Decrement </button>
      <button onClick = { () => dispatch( {type: 'reset', value: initialState } )}> Reset </button>
      <button onClick = { () => dispatch( {type: 'increment', value: 5 } )}> Increment 5 </button>
      <button onClick = { () => dispatch( {type: 'decrement', value: 2 } )}> Decrement 2 </button>
    </div>
  )
}
export default CounterTwo
