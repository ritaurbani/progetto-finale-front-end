
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import BankCard from "../Components/BankCard"

const Favourites = () => {

    const { favourites, removeFromFavourites } = useContext(GlobalContext)



    return (
        <div>
            <h3 style={{ margin: "20px" }}>Your Favourites</h3>
            {
                favourites.map((item) => (
                    <div className="favourites-card">
                        <h3>{item.title}</h3>
                        <span onClick={() => removeFromFavourites(item.id)}><strong>X</strong></span>
                    </div>
                ))
            }
        </div>
    )
}

export default Favourites