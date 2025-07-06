import React from 'react'
import { useCartContext} from '../App'
function Cart(){
  const {cart,removeCart} = useCartContext()
  if (cart.length==0){
    return (
    <div >
      <h2>No Products Yet</h2>
      <p>Start adding products to your Cart and they will appear here!</p>
    </div>
  );
  }
    
  return <div >
    <h2>Your Cart..</h2>
    <div >
            {cart.map((product)=>
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
                <button onClick={()=>removeCart(product.id)}>Remove From Cart</button>
                </div>
            )}
        </div></div>
}

export default Cart
