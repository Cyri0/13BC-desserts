import { useEffect, useState } from 'react'

type CartItemType = {
    item: {name: string, price: number},
    quantity: number
}

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([])
  
  useEffect(()=>{
    setCart([
        { item: {
            name: "Piskóta", 
            price:5
        }, quantity: 10}
    ])
  },[])

  return (
    <div>
        <h2>Your Cart ({cart.length})</h2>
    </div>
  )
}

export default Cart