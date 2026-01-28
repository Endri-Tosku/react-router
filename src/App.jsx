// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chisiamo" element={<AboutUs />} />
        <Route path="/prodotti" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
