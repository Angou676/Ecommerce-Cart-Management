import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirm-order" element={<OrderSuccessPage />} />
      </Routes>
    </>
  );
};

export default App;
