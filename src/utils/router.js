import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/shop", element: <Home></Home> },
      { path: "/cart", element: <Home></Home> },
      { path: "/about", element: <Home></Home> },
    ],
  },
]);

export default router;
