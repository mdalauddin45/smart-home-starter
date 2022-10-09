import React, { useContext } from "react";
import { CartContext, ProductContext } from "./Main";
import Product from "./Product";
import { addToDb } from "../utils/fakeDB";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  // console.log(products);

  const handleAddToCart = (product) => {
    console.log(product);
    let newCart = [];
    const exists = cart.find((e) => e.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((e) => e.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
