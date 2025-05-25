import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { BankProduct } from "../types"

const ProductDetails = () => {

  const API_URL = "http://localhost:3001"

  const { id } = useParams<{ id: string }>()
  console.log("check id", id)
  const [singleProduct, setSingleProduct] = useState<BankProduct | null>(null)

  // const singleProduct = products.find((p) => p.id === Number(id))

  const fetchSingle = async (id: number) => {
    const response = await fetch(`${API_URL}/bankproducts/${id}`)
    const result = await response.json()
    setSingleProduct(result.bankproduct)
  }

  useEffect(() => {
    if (!id) {
      return
    } //stringa
    const numberId = parseInt(id)
    fetchSingle(numberId)
  }, [id])

  console.log("products in detail", singleProduct)

  return (
    <div>
      <h2>ProductDetails</h2>
      {singleProduct ?
        <div>
          <p><strong>Name : </strong>{singleProduct.title}</p>
          <p><strong>Name : </strong>{singleProduct.description}</p>
          <p><strong>Name : </strong>{singleProduct.rate}</p>
          <p><strong>Name : </strong>{singleProduct.category}</p>
        </div>
        : <p>"no product found"</p>
      }
    </div>
  )
}

export default ProductDetails