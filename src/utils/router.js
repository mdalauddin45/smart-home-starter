import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import About from "../components/About";
import Main from "../components/Main";
import { productsAddCartData } from "../loaders/getCart&ProductsData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsAddCartData,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/shop", element: <Shop></Shop> },
      { path: "/cart", element: <Cart></Cart> },
      { path: "/about", element: <About></About> },
    ],
  },
]);

export default router;
