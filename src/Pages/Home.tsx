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

// export type BankProduct = {
//   id: number,
//   img: string,
//   title: string;
//   category: string;
//   bankName: string;
//   description: string;
//   rate: number;
//   durationInYears: number;
//   canRemove?: boolean
// }

// type ItemToCompare = {
//   id: number,
//   title: string,
//   rate: number
// }

const Home = () => {

  const API_URL = "http://localhost:3001"

  const { isLoading, error, products, fetchProducts } = useProducts()

  const [itemsToCompare, setItemsToCompare] = useState<ItemToCompare[]>([])

  const [filteredProducts, setFilteredProducts] = useState<BankProduct[]>(products)


  const addToComparator = async (id: number) => {
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

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])


  //filtro utente
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



  
  return (
    <div className="container">
      <h2>Search for the lowest rate</h2>
      <div className="titles-sections"
        style={{ display: "flex", alignItems: "center", justifyContent: "start", margin: "40px 0", gap: "30px" }}>
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
            //products alla prop bankAccounts.
            bankAccounts={filteredProducts} //"products" del genitore - "bankAccounts" del figlio
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

