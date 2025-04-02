import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
  
    <div className='w-full h-screen' 
    style={{ backgroundColor : color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-18 inset-x-0 px-2 ">

      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">

      <button onClick={ () => setColor("red")}
      className='w-20 rounded-2xl'
      style={{background: "red"}}
      >Red</button>

      <button onClick={ () => setColor("green")}
      className='w-20 rounded-2xl'
      style={{background: "green"}}
      >Green</button>

      <button onClick={ () => setColor("yellow")}
      className='w-20 rounded-2xl'
      style={{background: "yellow"}}
      >Green</button>

        </div>
      </div>
    </div>

  )

}

export default App
