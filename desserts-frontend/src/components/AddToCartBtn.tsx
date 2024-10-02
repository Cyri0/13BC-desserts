import { useContext, useState } from "react"
import { DessertCardProp } from "./DessertCard"
import { CartCtx } from "../App"

const AddToCartBtn = (props: DessertCardProp) => {
  const [quantity, setQuantity] = useState(0)

  const cartctx = useContext(CartCtx)
  if(!cartctx){throw new Error("Something is wrong, I can feel it...")}
  const {cart,setCart} = cartctx;

  const increase = () => {
    setQuantity(quantity + 1)
    setCart([...cart, props])
  }

  const decrease = () => {
    setQuantity(quantity - 1)
  }

  return (
    <>  { quantity === 0 ?
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