import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Count = () => {
  // const [count, setcount] = useState(0)

  const dispatch = useDispatch()
  const count = useSelector((state) => state.age)
console.log(count)

  return (
    <div>
      <h1>Use Callback</h1>
      <h1>Count : {count}</h1>
      <h1>hello</h1>
      <button onClick={() => dispatch({ type: 'Icre' })} >Increment</button>
      <button onClick={()=>dispatch({type:'Decr'})} >Decrement</button>

    </div>

  )
}

export default Count
