import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Product from "./pages/Product/Products";
import ProductD from "./pages/ProductD/ProductD";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home></Home>
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About></About>
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <Product></Product>
          </MainLayout>
        }
      />
      <Route
        path="/products/:id"
        element={
          <MainLayout>
            <ProductD></ProductD>
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <Cart />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
