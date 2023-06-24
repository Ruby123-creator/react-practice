import React from 'react'
import '../Style.css'
import { useNavigate } from 'react-router-dom'
const Card = ({name ,price ,id ,img}) => {
    const navigate = useNavigate()
  return (
    <div className="card-box">
    <div className="card-body">
      <div className="card-img">
        <img src={img} height="200px" />
      </div>
      <div className="card-item-name">{name}</div>
      <div className="card-item-price">{price}</div>

     <button className="product-details-btn"
>Add To Cart</button>
      <button
        className="product-details-btn"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        More Details
      </button>
    </div>
  </div>  )
}

export default Card