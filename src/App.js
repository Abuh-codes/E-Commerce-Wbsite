import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Shop from "./Pages/Shop"
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar /> 
      <Shop/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/> 
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignup/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
