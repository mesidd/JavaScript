import React,{useReducer} from "react";

const initialState = {
  'fcounter' : 0,
  'scounter': 0
}

const reducer = (state, action) => {
  
  switch(action.type){
    case 'increment':
      return {
        ...state, [action.index] : state[action.index] + action.value
      }
    case 'decrement':
      return  {
        ...state, [action.index] : state[action.index] - action.value
      }
    case 'reset':
      return initialState

    default:
      return state
}
}

function CounterTwo(){

  const [ count, dispatch ] = useReducer(reducer, initialState)

  return(
    <div>
      <h2> Counter 1 : {count.fcounter} </h2>
      <button onClick={()=> dispatch({type: 'increment', value: 1, index: 'fcounter'})}>Increment</button>
      <button onClick={()=> dispatch({type: 'decrement', value: 1, index: 'fcounter'})}>Decrement</button>
      <button onClick={()=> dispatch({type: 'reset', value: initialState, index: 'fcounter'})}>Reset</button>
      <button onClick={()=> dispatch({type: 'increment', value: 5, index: 'fcounter'})}>Increment 5</button>
      <button onClick={()=> dispatch({type: 'decrement', value: 2, index: 'fcounter'})}>Decrement 2</button>
  
      <h2> Couter 2 : {count.scounter} </h2>
      Second counter : <span></span>
      <button onClick={()=> dispatch({type: 'increment', value: 5, index: 'scounter'})}>Increment 5</button>
      <button onClick={()=> dispatch({type: 'decrement', value: 2, index: 'scounter'})}>Decrement 2</button>
    </div>
  )
}

export default CounterTwo
