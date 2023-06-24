import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style.css'
const Home = () => {
    const Navigate = useNavigate();
  return (
    <div className='navbar'>
    <button onClick={()=>Navigate('/')}>
        Home
    </button>
   <button onClick={()=>Navigate('/productlist')}>
    Products
   </button>
   <button>
    cart
   </button>    
    </div>
  )
}

export default Home