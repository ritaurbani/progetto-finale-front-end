import { useProducts } from "../CustomHooks/useProducts"
import { AccountList } from "../Components/AccountList"
import SearchBar from "../Components/SearchBar"
import { useEffect, useState, useCallback } from "react"
import Comparator from "../Components/Comparator"
import { ItemToCompare, BankProduct, SearchFilters } from "../types"


function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value)
    }, delay)
  }
}

// type ItemToCompare = {
//   id: number,
//   title: string,
//   rate: number
// }



const Home = () => {

  const API_URL = "http://localhost:3001"

  const { isLoading, error, products, fetchProducts } = useProducts()

  const [itemsToCompare, setItemsToCompare] = useState<ItemToCompare[]>([])
  //deve inizialmente contenere tutti i prodotti prima che l'utente inizi a filtrare
  const [filteredProducts, setFilteredProducts] = useState<BankProduct[]>(products)


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
    setItemsToCompare(curr => [...curr, itemToCompare])
    setFilteredProducts(curr => curr.map((product) =>
      product.id === id ? { ...product, canRemove: true }
        : product
    ))
    console.log(filteredProducts)
    console.log("check array", itemsToCompare)
    // setShow(true)
  }
  console.log(filteredProducts)


  const removeComparator = (id: number) => {
    //teniamo i prodotti che non hanno il nome uguale a quello del item.name passato
    setItemsToCompare(curr => curr.filter((item) => item.id !== id))
    setFilteredProducts(curr => curr.map(product =>
      product.id === id ? { ...product, canRemove: false }
        :
        product
    ))
  }


  // 2. Sincronizza filteredProducts con products
  //senza useEffect Non c'è un meccanismo che aggiorna filteredProducts quando products cambia
  //Quando products cambia?
  //products da vuoto viene popolato con chiamata API
  // Aggiungi un nuovo prodotto
  // Modifichi un prodotto esistente
  // Elimini un prodotto
  // Pensa a useEffect come a un "ascoltatore" che dice:
  // "Hey React, ogni volta che products cambia, copia il suo valore in filteredProducts!"
  useEffect(() => {
    setFilteredProducts(products)
  }, [products])



  //Azione quando l utente cerca? filtra
  const handleChangeText = useCallback(debounce(
      async (filters: SearchFilters) => {
        const {title, category} = filters
        console.log("stringa ricevuta da input", title)
         if (title && category) {
          const response = await fetch(`${API_URL}/bankproducts/?search=${title}&category=${category}`);
          const results = await response.json();
          setFilteredProducts(results);
        }else if(title){
           const response = await fetch(`${API_URL}/bankproducts/?search=${title}`)
        const results = await response.json()
        console.log("filter-search", results)
        setFilteredProducts(results)
        } else if (category){
          const response = await fetch(`${API_URL}/bankproducts/?category=${category}`)
          const results = await response.json()
          console.log("filter-search", results)
          setFilteredProducts(results)
        }else{  
          fetchProducts()
              }
        //filtra su stesso array
        // const filteredProducts = products.filter((product) => {
        // return product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
        // product.title.toLowerCase().includes(searchValue.toLowerCase())
        // })
        // setFilteredProducts(filteredProducts)
      }, 300), [])



  //products contiene i dati presi da useProducts()
  return (
    <div className="container">
      <h2>Search for the lowest rate</h2>
      <div className="titles-sections"
        style={{ display: "flex", alignItems: "center", justifyContent: "start", margin: "40px 0" }}>
        <SearchBar
          onChangeText={handleChangeText}
        />
        {
          itemsToCompare.length > 0 ?
            <p><strong>Compare Intrest Rates</strong></p> : ""
        }
      </div>

      <div className="comparisonLayout">
        <section className="accountList">
          <AccountList
            //Stai solo passando il valore di products alla prop bankAccounts.
            //bankAccounts e products hanno stesso tipo BankProducts[]
            bankAccounts={filteredProducts} //"products" del genitore → "bankAccounts" del figlio
            onAdd={addToComparator}
            onRemove={removeComparator}
          />
        </section>
        <section className="comparator">
          <Comparator
            bankProductsToCompare={itemsToCompare} />
        </section>
      </div>

    </div>
  )
}

export default Home

// useProducts() → Restituisce { products: BankProduct[] }
//        ↓
// Home(genitore) → Prende `products` e lo passa come valore della prop`bankAccounts`
//        ↓
// AccountList(figlio) → Riceve`bankAccounts`(che è il vecchio`products` del genitore)