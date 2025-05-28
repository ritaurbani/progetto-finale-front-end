import { ItemToCompare } from "../types"
import { ProgressBar } from "./ProgressBar"

type ComparatorProps = {
  bankProductsToCompare: ItemToCompare[];
}


const Comparator = ({ bankProductsToCompare }: ComparatorProps) => {

  const sortedBankProducts = bankProductsToCompare.sort((a, b) => {
    return b.rate - a.rate
  })

  console.log("check if array is empty", bankProductsToCompare)
  return (
    <div className="barComparison">

      <ul>
        {sortedBankProducts.map((item, index) => (
          <div>
            <li key={index}>{item.title}: {item.rate}</li>
            <ProgressBar
            rate={item.rate}
            />
          </div>
        ))}
      </ul>


    </div>
  )
}

export default Comparator