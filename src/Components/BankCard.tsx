// import Button from "./Button"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"
import Alert from "./Alert"


type BankCardProps = {
  title: string,
  id: number,
  category: string,
  onAdd: (id: number) => void,
  onRemove: (id: number) => void,
  canRemove: boolean
}

const BankCard = ({ canRemove, title, id, onAdd, onRemove, category }: BankCardProps) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(GlobalContext)
  // define a constant isFavourite. It's true when favourites contains an element with the id in the props

  const foundFavourite = favourites.find((item) => item.id === id)
  const isFavourite = foundFavourite ? true : false; 

  const [show, setShow] = useState(false)

  setTimeout(() => {
    setShow(false)
  }, 1500)


  return (
    <div className="card">
      <div className="bankCardImg">
        {/* <img src="" alt="" />  */}
      </div>
      <div className="bankCardContent">
        <div className="title-heart">
          <h3 className="bankCardTitle"><Link to={`bankproducts/${id}`}>{title}</Link></h3>
          <p>{category}</p>
          {
            isFavourite ? (
              <span onClick={() => removeFromFavourites(id)}>❤️</span>

            ) : (
              <span onClick={() => {

                addToFavourites({ id, title })
                setShow(true)

                }}>🤍</span>)
            // < i className="is-favourite fa-regular fa-heart"></i>
            // < i className="fa-regular fa-heart"></i>
          }
          <Alert
          text="Added to Favourites"
          show={show}
          />

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