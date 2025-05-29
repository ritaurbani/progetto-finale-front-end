import { useState } from "react"
// import { useSearchParams } from "react-router-dom"



//callback lui comunica  a home la ricerca
type SearchBarPprops = {
  onChangeText: (value: string) => void,
}

const SearchBar = ({ onChangeText }: SearchBarPprops) => {

  const [searchValue, setSearchValue] = useState("")


  // const handleSearch = ()=> {
  //   setSearchParams({filter:searchValue})

  // }

  return (
    <>
      {/* <div style={{ position: 'relative' }} className="input-icon"> */}
        <label htmlFor=""></label>
        <input
          type="text"
          placeholder="search for a product"
          value={searchValue}
          onChange={(e) => {

            setSearchValue(e.target.value.toLowerCase())
            onChangeText(e.target.value)
          }
          }
        />
        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
      {/* </div> */}
    </>
  )
}

export default SearchBar