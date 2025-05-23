import { ItemToCompare } from "../types"

type ComparatorProps = {
  bankProductsToCompare: ItemToCompare[];
}


const Comparator = ({ bankProductsToCompare }: ComparatorProps) => {

  const sortedBankProducts = bankProductsToCompare.sort((a,b) => {
   return b.rate - a.rate
  })

  console.log("check if array is empty", bankProductsToCompare)
  return (
    <div>
      <div>Comparator</div>
      <ul>
        {sortedBankProducts.map((item, index) => (
          <li key={index}>{item.title}: {item.rate}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comparator