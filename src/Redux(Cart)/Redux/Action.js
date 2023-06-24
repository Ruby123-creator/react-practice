import axios from 'axios'
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from './ActionTypes'

export const getproductData = ()=>async(dispatch)=>{
  
try {
    dispatch(
        {
            type:FETCH_PRODUCT_REQUEST,
            
        }
      )
    const data = await axios.get('https://dummyjson.com/products')
      const products = data.data.products
    dispatch({
        type:FETCH_PRODUCT_SUCCESS,
        payload:products,
    })
} catch (error) {
    dispatch({
        type:FETCH_PRODUCT_FAILURE,
        payload:error.message,
    })
    console.log(error.message)
}

    
}