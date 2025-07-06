import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";
import { useCartContext } from '../App';
const Home = () => {
    const {addToCart,isCart,removeCart}=useCartContext() 
    const [products,setProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
.then(res => {
    setProducts(res.data.products)
    }).catch()
    },[])

    function buy(product){
        navigate(`/product/${product.id}`)
    }

  return (
    <div className='flex gap-2 flex-wrap '>
    {
        products.map((product)=>
            <div key={product.id} className="max-w-md mx-auto mt-10 p-4 border rounded-2xl shadow-lg bg-white">
                <img
                    src={'https://picsum.photos/200'}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-indigo-600 font-bold text-lg">${product.price}</span>
                    <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">{product.category}</span>
                </div>
                <div className="flex gap-2 mt-4">
                <button
                    onClick={() => buy(product)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Buy
                </button>

                {isCart(product.id) ? (
                    <button
                    onClick={() => removeCart(product.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                    Remove from Cart
                    </button>
                ) : (
                    <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                    Add to Cart
                    </button>
                )}
                </div>

            </div>
        )
    }
   </div>
  ) 
}

export default Home
