import { createContext, useEffect, useState } from "react"
import DessertCard, { DessertCardProp } from "./components/DessertCard"
import Cart from "./components/Cart"

export type CartCtxItem = {
  cart: DessertCardProp[],
  setCart: React.Dispatch<React.SetStateAction<DessertCardProp[]>>
}

export const CartCtx = createContext<CartCtxItem | undefined>(undefined)

const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([])
  const [cart, setCart] = useState<DessertCardProp[]>([])

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(apiDesserts => setDesserts(apiDesserts))
  },[])

  return (
    <CartCtx.Provider value={{cart: cart, setCart:setCart}}>
    <section className="home">
    <div>
        <h1>Desserts</h1>
        <div className="dessert-grid">
            {
              desserts.map(dessert => <DessertCard {...dessert}/>)
            }
        </div>
    </div>
      <Cart/>
    </section>
    </CartCtx.Provider>
  )
}

export default App