import React, { useState } from "react";

function Card({message,city,img,total}) {

// Using Single State
const [ visitors, setVisitors ] = useState(0)

  return (
    <div className="flex flex-row rounded-xl  p-4"
    style={{
      border: '0.88px solid',
      backdropFilter: 'saturate(180%) blur(14px)',
      background: ' #ffffff0d',
    }}
  >
    <div>
      <img
        src={img}
        alt="nft-gif"
        width="460"
        height="300"
        className="rounded-xl"
      />
          
    </div>
    <div className="rounded-b-xl py-4 ">
        <h1 className="font-RubikBold text-1xl"> Wanna Go </h1>
        <h1> {message} </h1>
        <button className = "mt-4" onClick = { ()=> { setVisitors(visitors+1) } }> { city } </button>
         <p className = "mt-4"> Visitors: {visitors} <span> {total} </span></p>
    </div>
          
    <div>
    </div>
  </div>
  )
}

export default Card
