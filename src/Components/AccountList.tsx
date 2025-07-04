import { BankProduct } from "../types.ts"
import BankCard from "./BankCard.tsx"

type Props = {
  bankAccounts: BankProduct[], //bankAccount e la prop
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
         category={account.category}
        onAdd={onAdd}
        onRemove={onRemove}
        canRemove={account.canRemove}
        
        />
          ))
        }
      </ul>
    </div>
  )
}

