import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { BankProduct } from "../types"
import { useNavigate } from "react-router-dom"

const ProductDetails = () => {

  const navigate = useNavigate()

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
      <h2 style={{ margin: "50px" }}>Learn more about this product</h2>
      {singleProduct ?
        (<div className="card-detailPage">
          <div className="card-detailPageImg">
            <img src="/img/bank.jpg" alt="" />
          </div>
          <div className="card-detailPageText">
            <p className="pageDetail-title"><strong></strong>{singleProduct.title}</p>
            <p className="description"><strong></strong>{singleProduct.description}</p>
            <p style={{
              fontWeight: "bold", color: "#DF591D"
            }}><strong>Rate offered : {singleProduct.rate}% </strong></p>
          </div>
          <div>
          </div>

        </div>)

        : (<p>"no product found"</p>)

      }
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>

    </div>

  )
}

export default ProductDetails