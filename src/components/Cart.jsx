import React from 'react'
import { useCart } from '../context/CartProvider'
import CloseIcon from '@mui/icons-material/Close';

export default function Cart() {
   const {cart,isSide,removeFromCart,updateCart,toggleSide} = useCart()
   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <div style={{ width:isSide?'400px':"0px",height:"100vh",position:"absolute",background:"#fff",right:0,top:80,zIndex:5,boxShadow:'0px 0px 5px black'}}>

      
           {isSide && <button onClick={()=>toggleSide()} style={{position:"absolute",right:10,top:4}}><CloseIcon /></button>}
      
       

        {
            cart.map((item)=>{
                return(
                    <div style={{display:"block" , margin:10,border:"1px solid black",padding:"2px",marginTop:"50px"}}>
                    
                    <div style={{display:"flex"}}>
                      <img src={item.image} alt="" style={{width:"80px",height:"80px"}}/>
                      <div style={{display:"block"}}>
                      <p>{item.title}</p>
                      <p>{item.price*item.quantity}</p>
                      </div>
                    </div>

                    <div style={{display:"flex"}}>
                        <button onClick={()=>updateCart(item.id,1)}>+</button>
                        <p>{item.quantity}</p>
                        <button onClick={()=>{item.quantity<1?removeFromCart(item.id):updateCart(item.id,-1)}}>-</button>

                        <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                    </div>

                    </div>
                )
            })
        }

        <p style={{marginLeft:'10px'}}>Total Price :- {totalPrice}</p>
        
    </div>
  )
}
