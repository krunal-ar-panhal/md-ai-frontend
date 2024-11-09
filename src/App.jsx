import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CategoryPage from "./Pages/CategoryPage";
import Search from "./Pages/Search";
import ShopPage from "./Pages/ShopPage";
import SignleProduct from "./Pages/SignleProduct";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<SignleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
