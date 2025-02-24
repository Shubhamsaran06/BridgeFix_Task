import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCart } from '../context/CartProvider';

export default function ItemList({product}) {
    
    const {addToCart,cart} = useCart()

    const matchId = (product, cart) => {
        if (cart.some((item) => item.id === product.id)) {
          return true
        } else {
          return false
        }
      };

  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
     <div> <img style={{height: 140, objectFit:"contain"}} src={product.image} alt="" /> </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {product.description}
        </Typography>
      </CardContent>
      <CardActions>
      {
          matchId(product,cart) ? <Button size="small"> Added to cart </Button> : <Button size="small" onClick={() => addToCart(product)}> Add to cart</Button>
        }
      </CardActions>
    </Card>
    </div>
  )
}


