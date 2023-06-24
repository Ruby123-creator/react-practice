import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Style.css'
// import QuantityCounter from "../ui/QuantityCounter/QuantityCounter";
import axios from 'axios'
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading ,setLoading] = useState(true)
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    const item = async()=>{
        try {
            const data = await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(data.data)
            setProduct(data.data) 
            setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
        
    }
    item();
  },[id])

//   console.log(product)
  return (
    <div className="productdetail-box">
      <button
        onClick={() => {
          navigate("/productlist");
        }}
      >
        Back
      </button>
      {
        !loading ?<div className="productdetail-body">
        <div className="productdetail-left">
          <img src={product?.images[0]} />
        </div>
        <div className="productdetail-right">
          <div className="productdetail-heading">{product?.title}</div>
          <div className="productdetail-price">{product?.price}</div>
          <div className="productdetail-price">{product?.rating}</div>
          <div className="productdetail-price">{product?.stock}</div>

          <div className="productdetail-warranty">
            {product?.description}
          </div>
          <div className="productdetail-key-features">
            <h2>Key features : </h2>
            <ul>
              {product?.images?.map((feature) => {
                return <img width="200px" src={feature}/>;
              })}
              <li>feature1</li>
            </ul>
          </div>
          {/* <QuantityCounter id={params.productId} /> */}
        </div>
      </div>:'loading'
      }
      
    </div>
  );
};

export default ProductDetail;