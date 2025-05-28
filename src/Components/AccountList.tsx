import { BankProduct } from "../types.ts"
import BankCard from "./BankCard.tsx"

//prop di questo component e bankaccount
type Props = {
  bankAccounts: BankProduct[], //bankAccount e la aprop
  onAdd:  (id: number) => void,
  onRemove: (id:number)=> void,
}

export const AccountList = ({ bankAccounts, onAdd, onRemove }: Props) => {

  const sortedBankProducts = bankAccounts.sort((a,b) => {
    return a.title.localeCompare(b.title)
  })
  
  return (
    <div>
      <ul>
        {
          sortedBankProducts.map((account, index) => (
            // <li key={index}>{account.title}</li>
         <BankCard
         key={index}
         id ={account.id}
         title={account.title}
        onAdd={onAdd}
        onRemove={onRemove}
        canRemove={account.canRemove || false}
        
        />
          ))
        }
      </ul>
    </div>
  )
}

