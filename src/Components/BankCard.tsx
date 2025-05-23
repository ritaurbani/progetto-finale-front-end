import Button from "./Button"
import { Link } from "react-router-dom"


type BankCardProps = {
    title: string,
    id: number,
  onAdd: (id: number) => void

}


const BankCard = ({title,id, onAdd}:BankCardProps) => {

  return (
    <div className="card">
          <h3><Link to={`bankproducts/${id}`}>{title}</Link></h3> 
        {/* <img src="" alt="" />  */}
        <Button
        id={id}
        text="Compare"
        onAdd={onAdd}/>
    </div>
  )
}

export default BankCard