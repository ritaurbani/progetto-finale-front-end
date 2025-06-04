
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import BankCard from "../Components/BankCard"

const Favourites = () => {

    const { favourites, setFavourites, addToFavourites, removeFromFavourites } = useContext(GlobalContext)

    const removeItem = (id) => {
        const removedItem = favourites.filter((item) => item.id !== id)

    }

  return (
    <div>
        <h3 style={{margin: "20px"}}>Your Favourites</h3>
        {
            favourites.map((item) => (
                <div className="favourites-card">
                    <h3>{item.title}</h3>
                    <span onClick={() => removeItem(item.id)}><i className="fa-solid fa-xmark"></i></span>
                </div>
            ))
        }
    </div>
  )
}

export default Favourites