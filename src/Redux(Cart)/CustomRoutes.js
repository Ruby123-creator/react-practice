import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import ProductList from './Components/ProductList'
import ProductDetail from './Components/ProductDetail'
const CustomRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>

    </Routes>
    
    </div>
  )
}

export default CustomRoutes