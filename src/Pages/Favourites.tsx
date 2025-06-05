
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import BankCard from "../Components/BankCard"
import { Link } from "react-router-dom"

const Favourites = () => {

    const { favourites, removeFromFavourites } = useContext(GlobalContext)



    return (
        <div>
            <h3 style={{ margin: "20px" }}>Your Favourites</h3>
            {favourites.length === 0 ? (

                <p style={{marginLeft:"20px"
                }}>No item added to favourites</p>

            ) : (favourites.map((item) => (
                <div key={item.id} className="favourites-card">
                    <h3 className="bankCardTitle"> <Link to={`bankproducts/${item.id}`}>{item.title}</Link></h3>
                    <span onClick={() => removeFromFavourites(item.id)}><strong>X</strong></span>
                </div>
            ))
            )
            }
        </div>
    )
}

export default Favourites