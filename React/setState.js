import React, { Component } from 'react'

class Counter extends Component {

  constructor(){

    super()
    this.state = {
      count : 0

    }
  }

  countChange(){
   this.setState({
      'count' : this.state.count + 1
    }, ()=> {
      console.log('Callback Value: ',this.state.count)
    })
    {console.log(this.state.count)} 
  }

  // Use this if propogate the change through each pass
  countChange(){
    this.state((prev) => ({
    count : prev.state + 1  
    )}
}

  render(){
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <p style={{fontSize:"50px"}}>Count : {this.state.count}</p>
        <button style={{width:"100px", height:"40px", fontSize:'30px', cursor:'pointer'}}
        onClick = { 
          () => {
            this.countChange()
          }
        }
        >Add</button> 
      </div>
    )
  }
}

export default Counter
