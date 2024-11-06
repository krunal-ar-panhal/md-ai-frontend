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
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
