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
import Products from "./pages/Products";
import HelpLayout from "./layouts/help/HelpLayout";
import Faq from "./pages/Faq";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
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
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
