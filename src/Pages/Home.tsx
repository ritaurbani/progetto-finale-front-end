import { useProducts } from "../CustomHooks/useProducts"
import { AccountList } from "../Components/AccountList"
import {Input} from "../Components/Input"
const Home = () => {
  const { isLoading, error, products } = useProducts()
  //products contiene i dati presi da useProducts()
  return (
    <div className="container">
      <h2>Search for the right bank product</h2>
      <Input/>
      <AccountList
        //Stai solo passando il valore di products alla prop bankAccounts.
        //bankAccounts e products hanno stesso tipo BankProducts[]
        bankAccounts={products} //"products" del genitore → "bankAccounts" del figlio
      />
    </div>
  )
}

export default Home

// useProducts() → Restituisce { products: BankProduct[] }
//        ↓
// Home(genitore) → Prende `products` e lo passa come valore della prop`bankAccounts`
//        ↓
// AccountList(figlio) → Riceve`bankAccounts`(che è il vecchio`products` del genitore)