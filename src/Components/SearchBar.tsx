import { useState } from "react"
import { useSearchParams } from "react-router-dom"



//callback lui comunica  a home la ricerca
type SearchBarPprops = {
  onChangeText: (value: string) => void,
}

const SearchBar = ({ onChangeText}: SearchBarPprops) => {

  const [searchValue, setSearchValue] = useState("")


  // const handleSearch = ()=> {
  //   setSearchParams({filter:searchValue})

  // }

  return (
    <>
      <label htmlFor=""></label>
      <input
        type="text"
        placeholder="search for a product"
        value={searchValue}
        onChange={(e) => {
        
          setSearchValue(e.target.value.toLowerCase()) 
          onChangeText(e.target.value)
        }
        } />
    </>
  )
}

export default SearchBar