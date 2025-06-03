import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./LayOut/AppLayout"
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails"
import { GlobalProvider } from "./Context/GlobalContext"
import Favourites from "./Pages/Favourites"


function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/bankproducts/:id" element={<ProductDetails />} />
              <Route path="/favourites" element={<Favourites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
