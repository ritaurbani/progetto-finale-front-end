import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import { useProducts } from "../CustomHooks/useProducts"
import { BankProduct } from "../types"

const ProductDetails = () => {

  const API_URL = "http://localhost:3001"

  const { products } = useProducts()
  const { id } = useParams<{ id: string }>()
  const NumberId = parseInt(id)
  const [singleProduct, setSingleProduct] = useState<BankProduct | null>(null)

  // const singleProduct = products.find((p) => p.id === Number(id))

const fetchSingle = async(id:number) => {
  const response = await fetch(`${API_URL}/bankproducts/${id}`)
  const result = await response.json()
  setSingleProduct(result)
}

useEffect(() => {
  fetchSingle(NumberId)
},[id, products])

  console.log("products in detail", products)
  console.log("products in detail", singleProduct)

  return (
    <div>
      <h2>ProductDetails</h2>
     <p><strong>Name : </strong>{singleProduct.title}</p>
    </div>
  )
}

export default ProductDetails