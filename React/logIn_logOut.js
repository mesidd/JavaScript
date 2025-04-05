import React, { Component } from 'react';

class RenderState extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn : false
    }

    this.changeInfo = this.changeInfo.bind(this)
  }

  changeInfo(){
    this.setState({
      'isLoggedIn' : !(this.state.isLoggedIn)
    },()=> {
      console.log(this.state.isLoggedIn)
    })

  }

  render() {

    return (
      <div>
        <h1>{this.state.isLoggedIn ? "Logged In" : "Logged Out"}
        </h1>
        <button onClick={this.changeInfo}>Change</button>
      </div>
    )
  }
}

export default RenderState;
