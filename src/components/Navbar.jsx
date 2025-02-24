import React from 'react'
import { useCart } from '../context/CartProvider'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  const {cart,toggleSide} = useCart()  
  return (
    <div style={{width:"100%",height:"80px",backgroundColor:"#8ecae6",display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"0px "}}>
        <HomeIcon style={{color:"#fff",fontSize:40}}/>
        <Button onClick={()=>toggleSide()} style={{color:"#fff",fontSize:20}}>
           <ShoppingCartIcon/>  
            
            {`(${(cart.length)})`}</Button>
    </div>
  )
}
