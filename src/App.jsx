import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const Context=React.createContext()
export const useCartContext=()=> useContext(Context)

function App() {
  const [cart, setCart] = useState(() => {
  const stored = localStorage.getItem("products");
  return stored ? JSON.parse(stored) : [];
});

  useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cart));
        console.log("CART UPDATED:", cart);
    }, [cart]);
  const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeCart = (productId) => {
        setCart((prev) => prev.filter((product) => product.id !== productId));
    };

    const isCart = (productId) => {
        return cart.some((product) => product.id === productId);
    };

    const value = {
        cart,
        addToCart,
        removeCart,
        isCart,
    };
  return (
    <Context.Provider value={value}>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product/:id' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </Context.Provider>
  )
}

export default App
