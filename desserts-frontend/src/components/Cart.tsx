import { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem"
import { CartContext } from "../pages/Home"

export type CartItemType = {
    name: string,
    price: number
}

export type VisibleCartType = {
    item: CartItemType,
    quantity: number
}

const Cart = () => {
    const cartCtx = useContext(CartContext)
    if(!cartCtx){
        throw new Error("Something is wrong, I can feel it")
    }
    const {cart} = cartCtx

    const [visibleCart, setVisibleCart] = useState<VisibleCartType[]>([])

    const makeMeUniqeNames = (cart: CartItemType[]) => {
        let unique:string[] = []
        cart.forEach(cartItem => {
            if(!unique.includes(cartItem.name)){
                unique.push(cartItem.name);
            }
        })
        return unique
    }

    useEffect(()=>{
        let unique:string[] = makeMeUniqeNames(cart)

        let tempCart:VisibleCartType[] = []
        unique.forEach(dessert_name => {
            let actualItem:CartItemType | undefined = undefined;
            let counter = 0
            cart.forEach(cartItem => {
                if(cartItem.name === dessert_name){
                    counter++;
                    if(!actualItem){
                        actualItem = cartItem;
                    }
                }
            })

            if(actualItem != undefined){
                let visibleItem: VisibleCartType = {
                    item: actualItem as CartItemType,
                    quantity: counter
                }
                tempCart.push(visibleItem)
            }
        })
        setVisibleCart(tempCart)
    }, [cartCtx])

  return (
    <aside className="cart">
        <h2>Your Cart ({cart.length})</h2>
        {visibleCart.map(cartitem => <CartItem {...cartitem} />)}
    </aside>
  )
}

export default Cart