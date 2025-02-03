import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mens from "./pages/Mens";
import Womens from "./pages/Women";
import Unisex from "./pages/Unisex";
import Giftsets from "./pages/Giftsets";
import Brand from "./pages/Brand";
import Dior from "./pages/Dior";
import Versace from "./pages/Versace";
import TomFord from "./pages/Tomford";
import YSL from "./pages/Ysl";
import Chanel from "./pages/Chanel";
import CK from "./pages/Ck";
import Gucci from "./pages/Gucci";
import Product from "./pages/Product";
import AddToCart from "./pages/AddToCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/women" element={<Womens />} />
        <Route path="/unisex" element={<Unisex />} />
        <Route path="/giftsets" element={<Giftsets />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/brand/dior" element={<Dior />} />
        <Route path="/brand/versace" element={<Versace />} />
        <Route path="/brand/tomford" element={<TomFord />} />
        <Route path="/brand/ysl" element={<YSL />} />
        <Route path="/brand/CK" element={<CK />} />
        <Route path="/brand/gucci" element={<Gucci />} />
        <Route path="/brand/chanel" element={<Chanel />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/place-order" element={<PlaceOrder />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
