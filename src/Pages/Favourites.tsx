
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"

const Favourites = () => {

    const { favourites, addToFavourites, removeFromFavourites } = useContext(GlobalContext)

  return (
    <div>Favourites</div>
  )
}

export default Favourites