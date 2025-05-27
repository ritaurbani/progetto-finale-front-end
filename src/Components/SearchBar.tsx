import { useState } from "react"
import { useSearchParams } from "react-router-dom"



//callback lui comunica  a home la ricerca
type SearchBarPprops = {
  onChangeText: (value: string) => void,
  handleSearch: () => void,
}
const SearchBar = ({ onChangeText, handleSearch}: SearchBarPprops) => {

  const [searchValue, setSearchValue] = useState("")

  const [searchParams, setSearchParams] = useSearchParams()


  // const handleSearch = ()=> {
  //   setSearchParams({filter:searchValue})

  // }

  return (
    <div><label htmlFor=""></label>
      <input
        type="text"
        placeholder="search for a product"
        value={searchValue}
        onChange={(e) => {
        
          setSearchValue(e.target.value.toLowerCase()) 
          onChangeText(e.target.value)
        }
        } />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar