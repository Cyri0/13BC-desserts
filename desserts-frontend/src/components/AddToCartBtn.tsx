import { useContext, useState } from "react"
import { CartContext } from "../pages/Home"
import { DessertCardProp } from "./DessertCard"

const AddToCartBtn = (props: DessertCardProp) => {
  const [quantity, setQuantity] = useState(0)
  const cartCtx = useContext(CartContext)

  if(!cartCtx){ throw new Error("Nincs kontextus bro") }

  const {cart, setCart} = cartCtx;

  const increase = ()=>{
    setQuantity(quantity + 1)
    setCart([...cart, props])
  }

  const decrease = ()=>{
    setQuantity(quantity - 1)
    let same = cart.filter(dessert => dessert.name == props.name);
    same.pop();
    setCart([... cart.filter(dessert => dessert.name != props.name), ...same]);
  }

  return (
    <>
        {
            quantity === 0 ?
            <div className="add-btn" onClick={increase}>Add to Cart</div> :
            <div className="add-btn used">
                <button onClick={decrease}>-</button>
                {quantity}
                <button onClick={increase}>+</button>
            </div>
        }
    </>
  )
}

export default AddToCartBtn