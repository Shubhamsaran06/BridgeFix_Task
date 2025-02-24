import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function Home() {

  const [products,setProducts] = useState([])

  useEffect (()=>{
     fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>setProducts(data))
  },[])


  return (
    <div style={{
       width:"100%",
       height:"100vh",
       display:"flex",
       flexWrap:"wrap",
       gap:"20px",
       padding:"20px"
    }}>
       {products.map((product)=>{
        return(<>
           <ItemList product={product} key={product.id}/>
        </>)
       })}
    </div>
  )
}

