import { ItemToCompare } from "../types"
import { ProgressBar } from "./ProgressBar"

type ComparatorProps = {
  bankProductsToCompare: ItemToCompare[];
}


const Comparator = ({ bankProductsToCompare }: ComparatorProps) => {

  const sortedBankProducts = bankProductsToCompare.sort((a, b) => {
    return a.rate - b.rate
  })

  console.log("check if array is empty", bankProductsToCompare)
  return (
    <div className="barComparison">

      <ul className="list-compared">
        {sortedBankProducts.map((item, index) => (
          <div style={{display: "flex"}}>
            <li key={index}>{item.title}:</li>
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