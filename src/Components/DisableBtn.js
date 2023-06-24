import React, { useState } from 'react'

const DisableBtn = () => {
    let [text ,setText] = useState("")
  return (
    <div>
        <p>DisableBtn</p>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <button disabled={text.length<1} >Submit</button>
    </div>
  )
}

export default DisableBtn