// react
import { useState } from "react";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./App.css";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import HelpLayout from "./layouts/help/HelpLayout";
import Faq from "./pages/Faq";

function App() {
  const [cart, setCart] = useState();
  const handleSubmit = (e, item, quantity) => {
    e.preventDefault();
    console.log(item, quantity);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home cart={cart} />,
        },
        {
          path: "cart",
          element: <Cart cart={cart} setCart={setCart} />,
        },
        {
          path: "help",
          element: <HelpLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
          ],
        },
        {
          path: "products",
          element: <Products handleSubmit={handleSubmit} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
