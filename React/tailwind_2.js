import React from "react";

function Card({message,city,img}) {
  // console.log (message)
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
        <h1>{message}</h1>
        <h1 className="font-RubikBold ">Wanna a ride!</h1>
        <button className="mt-4">{city || NYC}</button>
        
        {/* {city = "NYC"} - Props */}

    </div>
  </div>
  )
}

export default Card
