import { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import { CartCtx } from '../App'

export type CartItemType = {
    item: {
        name: string, 
        price: number
    },
    quantity: number
}

const Cart = () => {
  const [visibleCart, setVisibleCart] = useState<CartItemType[]>([])
  const cartctx = useContext(CartCtx)
  if(!cartctx){throw new Error("Something is wrong, I can feel it...")}
  const {cart} = cartctx;

  useEffect(()=>{
    let li:CartItemType[]  = [];

    cart.forEach(cartItem => { li.push({
        item: {name: cartItem.name, price: cartItem.price},
        quantity: 1
    }) })

    setVisibleCart(li)
  },[cartctx])

  return (
    <div>
        <h2>Your Cart ({visibleCart.length})</h2>
        {visibleCart.map(cartItem => <CartItem {...cartItem}/>)}
    </div>
  )
}

export default Cart