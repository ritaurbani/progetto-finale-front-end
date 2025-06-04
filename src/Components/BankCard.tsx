// import Button from "./Button"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"


type BankCardProps = {
  title: string,
  id: number,
  onAdd: (id: number) => void,
  onRemove: (id: number) => void,
  canRemove: boolean
}


const BankCard = ({ canRemove, title, id, onAdd, onRemove }: BankCardProps) => {
  const { favourites, addToFavourites, red, removeFromFavourites } = useContext(GlobalContext)
  // define a constant isFavourite. It's true when favourites contains an element with the id in the props
  // false otherwise.
  // Use isFavourite boolean in the JSX part to show the red heart or not.


  return (
    <div className="card">
      <div className="bankCardImg">
        {/* <img src="" alt="" />  */}
      </div>
      <div className="bankCardContent">
        <div className="title-heart">
          <h3 className="bankCardTitle"><Link to={`bankproducts/${id}`}>{title}</Link></h3>

          {
            red ? (
              <span onClick={() => removeFromFavourites(title)}><i className="fa-regular fa-heart"></i></span>
            ) : (
                <span onClick={() => addToFavourites ({id, title})}><i className="is-favourite fa-regular fa-heart"></i></span>)

          }

        </div>
        <div>


          {canRemove ? (
            <button
              className="bankCardBtnRemove"
              onClick={() => onRemove(id)}>
              Remove
            </button>
          ) : (
            <button
              className="bankCardBtnAdd"
              onClick={() => onAdd(id)}>
              Compare
            </button>
          )


          }

        </div>
      </div>
    </div>
  )
}

export default BankCard