import { useProducts } from "../CustomHooks/useProducts"

const Home = () => {
  const { isLoading, error, bankProducts } = useProducts()

  return (
    <div>
      {
        // bankProducts.map((p:string) =>(

        // ))
      }

    </div>
  )
}

export default Home