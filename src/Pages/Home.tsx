import { useProducts } from "../CustomHooks/useProducts"
import { AccountList } from "../Components/AccountList"

const Home = () => {
  const { isLoading, error, products } = useProducts()

  return (
    <div>
      <AccountList
      bankAccounts={products} //stesso tipo
      />
    </div>
  )
}

export default Home