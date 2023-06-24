import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./ActionTypes";


export const productlist = (state={
    loading:true,
    data:[],

} ,action)=>{
    console.log(action.payload)
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state ,
                loading:true,
            }
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state ,
                loading:false,
                data:action.payload,
            }
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
        return state
    }
}