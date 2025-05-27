// import Button from "./Button"
import { Link } from "react-router-dom"


type BankCardProps = {
  title: string,
  id: number,
  onAdd: (id: number) => void
  onRemove: (id: number) => void

}


const BankCard = ({ title, id, onAdd, onRemove }: BankCardProps) => {

  return (
    <div className="card">
      <div className="bankCardImg">
        {/* <img src="" alt="" />  */}
      </div>
      <div className="bankCardContent">
        <h3 className="bankCardTitle"><Link to={`bankproducts/${id}`}>{title}</Link></h3>
        <div>
          <button className="bankCardBtnAdd" onClick={() => onAdd(id)}> Compare </button>
          <button className="bankCardBtnRemove" onClick={() => onRemove(id)}> Remove </button>
        </div>
      </div>
    </div>
  )
}

export default BankCard