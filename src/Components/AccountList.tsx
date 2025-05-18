import { BankProduct } from "../types.ts"

//prop di questo component e bankaccount
type Props = {
  bankAccounts: BankProduct[]
}




export const AccountList = ({ bankAccounts }: Props) => {


  return (
    <div>
      <ul>
        {
          bankAccounts.map((account, index) => (
            <li key={index}>{account.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

