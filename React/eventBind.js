import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello"
    }
  }

  // changeBack = () => {
  //   this.setState({
  //     message : "Hi"
  //   })
  // }

  changeBack(){
    this.setState({
      message : 'Hi'
    })
  }

  // changeText(){
  //   this.setState({
  //     'message':"Hello"
  //   })
  // }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick = {()=> this.changeText()}>Hello</button> */}
        <button onClick={this.changeBack.bind(this)}>Hi</button>
      </div>
    );
  }
}

export default EventBind;
