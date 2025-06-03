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

  const { favourites, addToFavourites, removeFromFavourites } = useContext(GlobalContext)




  return (
    <div className="card">
      <div className="bankCardImg">
        {/* <img src="" alt="" />  */}
      </div>
      <div className="bankCardContent">
        <div className="title-heart">
          <h3 className="bankCardTitle"><Link to={`bankproducts/${id}`}>{title}</Link></h3>
          <span onClick={addToFavourites}><i className="fa-regular fa-heart"></i></span>
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