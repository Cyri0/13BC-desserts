import { useState } from "react"
import CartItem from "./CartItem"

export type CartItemType = {
    name: string,
    price: number
}

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([
    {name:"Alma", price: 2},
    {name:"Körte", price: 3},
    {name:"Szilva", price: 1.5},
  ])
  return (
    <aside className="cart">
        <h2>Your Cart ({cart.length})</h2>
        {cart.map(cartitem => <CartItem {...cartitem} />)}
    </aside>
  )
}

export default Cart