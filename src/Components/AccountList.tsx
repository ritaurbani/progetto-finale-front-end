import { BankProduct } from "../types.ts"
import BankCard from "./BankCard.tsx"

//prop di questo component e bankaccount
type Props = {
  bankAccounts: BankProduct[] //bankAccount e la aprop
}




export const AccountList = ({ bankAccounts }: Props) => {


  return (
    <div>
      <ul>
        {
          bankAccounts.map((account, index) => (
            // <li key={index}>{account.title}</li>
         <BankCard
         key={index}
         id ={account.id}
         title={account.title}
        />
          ))
        }
      </ul>
    </div>
  )
}

