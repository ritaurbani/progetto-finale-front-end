import { BankProduct } from "../types.ts"
import BankCard from "./BankCard.tsx"

//prop di questo component e bankaccount
type Props = {
  bankAccounts: BankProduct[], //bankAccount e la aprop
  onAdd: (id: number) => void
}

export const AccountList = ({ bankAccounts, onAdd }: Props) => {

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
        onAdd={onAdd}
        
        />
          ))
        }
      </ul>
    </div>
  )
}

