
// Same Functionality

  return <h1> Wanna Go Dubai </h1>


// React for creating Element
  import React from 'react'
  return React.createElement('h1', null, 'Wannna Go Dubai')

  return React.createElement('div', null, React.createElement('h1', null, 'Wanna Go Dubai'))


// Named Export
  export const Welcome = () => <h1> Welcome </h1>  
  import { Welcome }

    
// Default Export
  function Welcome () {
    return <h1> Welcome </h1>
  }
  export default Welcome 
  import Welcome
