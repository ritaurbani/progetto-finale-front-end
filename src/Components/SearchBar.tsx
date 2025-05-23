import { useState } from "react"



//callback lui comunica  a home la ricerca
type SearchBarPprops = {
  onChangeText: (value: string) => void,
}
const SearchBar = ({ onChangeText }: SearchBarPprops) => {

  const [searchValue, setSearchValue] = useState("")

  return (
    <div><label htmlFor=""></label>
      <input
        type="text"
        placeholder="search for a product"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
          onChangeText(e.target.value)
        }
        } />
    </div>
  )
}

export default SearchBar