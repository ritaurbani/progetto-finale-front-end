import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./LayOut/AppLayout"
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/bankproducts/:id" element={<ProductDetails />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
