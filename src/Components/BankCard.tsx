import Button from "./Button"
import { Link } from "react-router-dom"


type BankCardProps = {
    title: string,
    id: number

}


const BankCard = ({title,id}:BankCardProps) => {

  return (
    <div className="card">
          <h3><Link to={`bankproducts/${id}`}>{title}</Link></h3> 
        {/* <img src="" alt="" />  */}
        <Button
        text="Compare"/>
    </div>
  )
}

export default BankCard