import React, { useState } from 'react'

const ShowHideRender = () => {
    const [hide ,setHide] = useState(false)
  return (
    <div>
        <div>ShowHideRender</div>
        <br />
        <br />
        <button onClick={()=>setHide(!hide)}>{hide?'show the div':'hide the div'}</button>
        <br />
        <br />
        {
           hide?'':<div>I am there!!</div> 
        }
    </div>
  )
}

export default ShowHideRender