// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chisiamo" element={<AboutUs />} />
        <Route path="/prodotti">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
