import { useProducts } from "../CustomHooks/useProducts"
import { AccountList } from "../Components/AccountList"
import { Input } from "../Components/Input"
import { useEffect, useState } from "react"
import Comparator from "../Components/Comparator"
import { ItemToCompare } from "../types"


// type ItemToCompare = {
//   id: number,
//   title: string,
//   rate: number
// }

const Home = () => {

  const API_URL = "http://localhost:3001"

  const { isLoading, error, products } = useProducts()

  const [itemsToCompare, setItemsToCompare] = useState<ItemToCompare[]>([])

  const addToComparator = async (id: number) => {
    console.log("inizio funzione")
    const response = await fetch(`${API_URL}/bankproducts/${id}`)
    const result = await response.json()
    console.log("recupero id", result)
    // setItemsToCompare(result)
    const itemToCompare = {
      id: result.id,
      title: result.title,
      rate: result.rate
    }
    setItemsToCompare([...itemsToCompare, itemToCompare])
  }

  useEffect(() => {
    addToComparator(1)
  }, [])

  //products contiene i dati presi da useProducts()
  return (
    <div className="container">
      <h2>Search for the right bank product</h2>
      <section className="accountList">
        <Input />
        <AccountList
          //Stai solo passando il valore di products alla prop bankAccounts.
          //bankAccounts e products hanno stesso tipo BankProducts[]
          bankAccounts={products} //"products" del genitore → "bankAccounts" del figlio
          onAdd={addToComparator}
        />
      </section>
      <section className="comparator">
        <Comparator
        itemsToCompare={itemsToCompare}/>
      </section>
    </div>
  )
}

export default Home

// useProducts() → Restituisce { products: BankProduct[] }
//        ↓
// Home(genitore) → Prende `products` e lo passa come valore della prop`bankAccounts`
//        ↓
// AccountList(figlio) → Riceve`bankAccounts`(che è il vecchio`products` del genitore)