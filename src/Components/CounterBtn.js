import React, { useState } from 'react'

const CounterBtn = () => {
    const [count ,setCount] = useState(0)
    const handleClick=(str)=>{
       if(str==='+'){
          setCount(count+1);
       }
       else if(str==='-'){
        setCount(count-1);
       }
       else{
    setCount((prev)=>prev+str)
       }
    }
  return (
    <div>
       <p>CounterBtn</p>
       <div>{count}</div>
       <button onClick={()=>handleClick('+')}>Increase the value</button>
       <button onClick={()=>handleClick('-')}>decrease the value</button>
       <button onClick={()=>handleClick(2)}>Increment by 2</button>


    </div>
  )
}

export default CounterBtn