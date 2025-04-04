import React from "react";


// Method 1
const Destructure = props => {
  const {fname, lname} = props
  return(
    <div>
      <h1>Hey {fname} {lname} !!</h1>
    </div>
  )
}

// Method 2
function Destructure(props){
  return (
    <div>
      <h1>Hey {props.fname} {props.lname}</h1>
    </div>
  )
}

// Method 3
const Destructure = ({fname, lname}) => {
  return (
    <div>
    <h1>Hey {fname} {lname} !!</h1>
    </div>
  )
}

// Method 4
const Destructure = ({props}) => {
  return (
    <div>
     <h1>Hey {props.fname} {props.lname} !!</h1>
    </div>
  )
}

export default Destructure
