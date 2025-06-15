import { useState } from "react"
import { SearchFilters } from "../types"
// import { useSearchParams } from "react-router-dom"



//callback lui comunica  a home la ricerca
type SearchBarPprops = {
  onChangeText: (filters: SearchFilters) => void,
}

const SearchBar = ({ onChangeText }: SearchBarPprops) => {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  // const handleSearch = ()=> {
  //   setSearchParams({filter:searchValue})

  // }

  return (
    <>
      {/* <div style={{ position: 'relative' }} className="input-icon"> */}
      <div className="searchContainer">
        <select
          className="select"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            //
            onChangeText({ title, category: e.target.value })//invoco la funziona - i filtri comunicano al parent che valore cercare
            console.log(e.target.value)
          }}>
          <option value="">Choose Category</option>
          <option value="Mutuo">Mutuo</option>
          <option value="Prestiti Personali">Prestiti</option>

        </select>
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="search for a product"
          value={title}
          onChange={(e) => {

            setTitle(e.target.value)
            onChangeText({ category, title: e.target.value })//invoco la funziona
          }
          }
        />
      </div>
      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      {/* </div> */}
    </>
  )
}

export default SearchBar