import Button from "./Button"
import { Link } from "react-router-dom"


type BankCardProps = {
  title: string,
  id: number,
  onAdd: (id: number) => void

}


const BankCard = ({ title, id, onAdd }: BankCardProps) => {

  return (
    <div className="card">
      <div className="bankCardImg">
        {/* <img src="" alt="" />  */}
      </div>
      <div className="bankCardContent">
        <h3 className="bankCardTitle"><Link to={`bankproducts/${id}`}>{title}</Link></h3>
        <Button
          id={id}
          text="Compare"
          onAdd={onAdd} />
      </div>
    </div>
  )
}

export default BankCard