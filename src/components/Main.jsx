import React, { createContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);
const Main = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <ProductContext.Provider value={products}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default Main;
