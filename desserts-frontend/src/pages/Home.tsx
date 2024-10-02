import { useEffect, useState } from "react"
import DessertCard from "../components/DessertCard"
import { DessertCardProp } from "../components/DessertCard"
import Cart from "../components/Cart"

const Home = () => {
  const [desserts, setDesserts]  = useState<DessertCardProp[]>([])
  
  useEffect(()=>{
    fetch("/data.json")
    .then(res => res.json())
    .then(apiDesserts => {
      console.log("Hi!");
      
      setDesserts(apiDesserts)})
  },[])

  return (
    <div className="home">
        <section className="dessert-panel">
        <h1>Desserts</h1>
        <div className="cards-grid">
            {
                desserts.map((dessert) => <DessertCard {...dessert} />)
            }
        </div>
        </section>

        <Cart />
    </div>
  )
}

export default Home