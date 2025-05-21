import { ItemToCompare } from "../types"

type ComparatorProps = {
  itemsToCompare: ItemToCompare[];
}


const Comparator = ({ itemsToCompare }: ComparatorProps) => {

  console.log("check if array is empty",itemsToCompare)
  return (
    <div>
      <div>Comparator</div>
      <ul>
        {itemsToCompare.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comparator