import React, { Component } from 'react'

class Message extends Component {

  constructor(){
    super()
    this.state = {
      message: "",
      showButton: true

    } 
  }

  changeMessage(){
    this.setState({
      "message": "Thank you for subscribing.",
      'showButton': false
    })
  }

  render(){
    return (
      <div>
        <h1>Explore More</h1>
        <h2 style={{color: "red"}}>{this.state.message}</h2>

        {
        this.state.showButton &&  
        <button style={ {cursor: 'pointer'} } onClick = {() => this.changeMessage()}
        >Subscribe</button>
        }
      </div>
    )
  }
}

export default Message
