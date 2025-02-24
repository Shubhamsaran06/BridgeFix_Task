import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export default function CartProvider({children}) {
  const [cart , setCart] = useState([])
  const [isSide,setSide]= useState(false)

  const addToCart = (product)=>{
  
      setCart((prevCart)=>{
         return [...cart,{...product,quantity:1}]
      })
  }

  const toggleSide = () =>{
    setSide(!isSide)
  }

  const removeFromCart = (id)=>{
      setCart((prevCart)=>prevCart.filter((item)=>item.id !== id))
  }

  const updateCart = (id, amount) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
          )
        );
      };

  return (
    <CartContext.Provider value = {{cart,addToCart,toggleSide,isSide,removeFromCart,updateCart}}>
       { children}
    </CartContext.Provider>
  )
}

export const useCart =()=> useContext(CartContext);
