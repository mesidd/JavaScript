import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch(){
  const [post, setPost ] = useState({})
  const [id, setId] = useState(1)
  const [ idFromButtonClick, setIdFromButtonClick ] = useState(1)

  useEffect(()=> {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[idFromButtonClick])

  const handleClick = () => {

    setIdFromButtonClick(id)
  }

return(
  <>
    <input type="text" value={id} onChange={ e => setId(e.target.value)}/>
    <button onClick={handleClick}>Submit</button>
    {/* {posts.map((x)=> <h1 key={x.id}>{x.title}</h1>
  )} */}
  <h1>{post.title}</h1>
  </>
)

}

export default DataFetch
