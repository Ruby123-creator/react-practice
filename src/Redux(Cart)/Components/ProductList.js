import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductData } from '../Redux/Action'
import Card from './Card'
import uniqid from 'uniqid'
const ProductList = () => {
    const {data ,loading} = useSelector(state=>state.productdata)
    const dispatch = useDispatch()
    useEffect(()=>{
     dispatch(getproductData());
    },[])
  return (
    <div className='productlist'>
         {
            !loading && data.map((product)=>{
                return(
                    <Card
            key={uniqid()}
            name={product?.title}
            price={product?.price}
            id={product?.id}
            img={product?.images[0]}
          />
                )
            })
         }
    </div>
  )
}

export default ProductList