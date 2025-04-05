import React, {useState} from "react";

function HookName() {

  const [name, setName] = useState({firstName: '', lastName: ''})

  return (

    <form >

      <input 
      type="text" 
      placeholder="FirstName" 
      value={name.firstName} 
      onChange={e => setName({...name,firstName: e.target.value})}/>

      <input 
      type="text" 
      placeholder="SecondName" 
      value={name.lastName} 
      onChange={e=> setName({...name,lastName: e.target.value})}/>

      <h2>Your name is : {name.firstName} {name.lastName}</h2>

    </form>
  )
}

export default HookName
