import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useCartContext} from '../App';
import { useParams } from 'react-router-dom';
const Product = () => {
  const {isCart, addToCart, removeCart} =useCartContext()
  const [product,setProduct]= useState({});
  let { id } = useParams();
  
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then(
      (res)=>{
        setProduct(res.data)
      }
    ).catch()
  },[id])
  const inCart = product.id ? isCart(product.id) : false;
  
  function handleClick(e) {
  e.preventDefault()
  if (inCart) {
    removeCart(product.id);
  } else {
    console.log("ADDING TO CART:", product);
    addToCart(product);
  }
}
 return (
    <div className="max-w-5xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={'https://picsum.photos/200'}
            alt={product.title}
            className="w-full h-auto rounded-xl border"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-sm text-gray-500 mt-1 capitalize">{product.category}</p>

            <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-semibold text-indigo-600">${product.price}</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">In Stock</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition" onClick={handleClick}>
              {isCart(product.id)? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
