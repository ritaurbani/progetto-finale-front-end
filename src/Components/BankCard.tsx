import Button from "./Button"
import { Link } from "react-router-dom"


type BankCardProps = {
    title: string,

}


const BankCard = ({title}:BankCardProps) => {

  return (
    <div className="card">
        <h3><Link to={``}>{title}</Link></h3> 
        <img src="" alt="" /> 
        <Button
        text="Compare"/>
    </div>
  )
}

export default BankCard