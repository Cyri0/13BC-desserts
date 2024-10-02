import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "../pages/Home"

export type CartItemType = {
    name: string,
    price: number
}

const Cart = () => {
    const cartCtx = useContext(CartContext)
    if(!cartCtx){
        throw new Error("Something is wrong, I can feel it")
    }
    const {cart} = cartCtx
    
  return (
    <aside className="cart">
        <h2>Your Cart ({cart.length})</h2>
        {cart.map(cartitem => <CartItem {...cartitem} />)}
    </aside>
  )
}

export default Cart