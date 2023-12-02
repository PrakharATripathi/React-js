import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./Product"
import ProductDetails from "./ProductDetails"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="/detail" element={<ProductDetails/>}>
            <Route path="/detail/:id" element={<ProductDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
