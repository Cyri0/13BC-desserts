
type DessertCardProp = {
    name: string
}

const DessertCard = (props: DessertCardProp) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default DessertCard