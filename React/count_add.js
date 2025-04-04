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
    })
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
