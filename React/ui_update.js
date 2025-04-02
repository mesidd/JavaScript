


const [ count, setCount ] = useStaate(0)

// Add 3 on each call
  const add = () => {
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)
    setCount((prevcount) => prevcount + 1)
  }


// No effect - single addition
  const add = () => {
    setCount( count + 1 )
    setCount( count + 1 )
    setCount( count + 1 ) 
  }
