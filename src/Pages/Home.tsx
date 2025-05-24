import { useProducts } from "../CustomHooks/useProducts"
import { AccountList } from "../Components/AccountList"
import SearchBar from "../Components/SearchBar"
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

  const[filteredProducts, setFilteredProducts] = useState([])

  const addToComparator = async (id: number) => {
    console.log("inizio funzione")
    const response = await fetch(`${API_URL}/bankproducts/${id}`)
    const result = await response.json()
    console.log("recupero id", result)
    // setItemsToCompare(result)
    const itemToCompare = {
      id: result.bankproduct.id,
      title: result.bankproduct.title,
      rate: result.bankproduct.rate
    }
    console.log("itemsToCompare:", itemsToCompare)
    console.log("itemToCompare:", itemToCompare)
    setItemsToCompare(prev => [...prev, itemToCompare])
    console.log("check array", itemsToCompare)
  }

  const handleChangeText = (searchValue:string) => {
    console.log("stringa ricevuta da input",searchValue)
    const filteredProducts = products.filter((product) => {
      product.title.toLowerCase().includes(searchValue.toLowerCase())    
      setFilteredProducts(filteredProducts)
    })
    return filteredProducts
  }


  //products contiene i dati presi da useProducts()
  return (
    <div className="container">
      <h2>Search for the right bank product</h2>
      <section className="accountList">
        <SearchBar
          onChangeText={handleChangeText} />

        <AccountList
          //Stai solo passando il valore di products alla prop bankAccounts.
          //bankAccounts e products hanno stesso tipo BankProducts[]
          bankAccounts={filteredProducts} //"products" del genitore → "bankAccounts" del figlio
          onAdd={addToComparator}
        
        />
      </section>
      <section className="comparator">
        <Comparator
          bankProductsToCompare={itemsToCompare} />
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