import React, {Component} from "react";
import Child from "./Child";

// Parent
class Parent extends Component {

  constructor(){
    super()
    this.state = {
      color: "hotpink"
    }
    this.colorChange = this.colorChange.bind(this)
    this.default = this.default.bind(this)
  }


  colorChange(childColor) {
    // // this.state.color = childColor
    // document.body.style.backgroundColor = childColor
    this.setState({'color': childColor})
  }

   default () {
    this.setState({'color': 'hotpink'})
  }

  render(){
    return(
      <div style={{ backgroundColor: this.state.color, height: '100vh', width: '100vw' }}>
        <Child colorChanger = { this.colorChange }/>
        <button onClick={this.default}>Reset</button>
      </div>
    )
  }

}

export default Parent

// Child


import React from "react";

// import Parent from "./Parent";

const Child = (props) => {
  return(
    <div>
      <button onClick={()=> props.colorChanger('blue') }>Blue</button>
      <button onClick={()=> props.colorChanger('green') }>Green</button>
    </div>
  )
}

export default Child
