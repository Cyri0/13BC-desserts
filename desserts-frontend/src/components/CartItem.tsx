import { VisibleCartType } from "./Cart"

const CartItem = (props: VisibleCartType) => {
  return (
    <div className="cart-item">
        <div>
            <strong>{props.item.name}</strong>
            <span className="quantity">{props.quantity}x</span>
            <span className="price">@ {props.item.price}$</span>
            <span className="sumprice"> {props.item.price * props.quantity}$</span>
        </div>
        <button>x</button>
    </div>
  )
}
export default CartItem