import AddToCartBtn from "./AddToCartBtn"

type DessertCardProp = {
    name: string
}

const DessertCard = (props: DessertCardProp) => {
  return (
    <div>
        {props.name}
        <AddToCartBtn/>
    </div>
  )
}

export default DessertCard