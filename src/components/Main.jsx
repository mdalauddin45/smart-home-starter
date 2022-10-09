import React, { createContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const ProductContext = createContext([]);
function Main() {
  const { products, initialCart } = useLoaderData();
  return (
    <div>
      <ProductContext.Provider value={products}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ProductContext.Provider>
    </div>
  );
}

export default Main;
