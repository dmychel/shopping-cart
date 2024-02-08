// react
import { useState } from "react";

// react router
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// css
import "./App.css";

// // layouts
// import RootLayout from "./layouts/RootLayout";

// pages
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import HelpLayout from "./layouts/help/HelpLayout";
import Faq from "./pages/Faq";

function App() {
  const [cart, setCart] = useState([]);
  const handleSubmit = (e, item, quantity) => {
    e.preventDefault();

    const newItem = {
      item: item.title,
      price: item.price,
      quantity: Number(quantity),
    };
    scanItem(newItem);
  };

  const scanItem = (item) => {
    if (item.quantity > 1) {
      const arr = duplicateItem(item);
      addToCart(arr);
    } else {
      addToCart(item);
    }
  };

  const duplicateItem = (item) => {
    let arr = [];
    for (let i = 0; i < item.quantity; i++) {
      const dupItem = { ...item };
      dupItem.quantity = 1;
      arr.push(dupItem);
    }
    return arr;
  };

  const addToCart = (product) => {
    if (product instanceof Array) {
      product.map((item) => {
        setCart((currentCart) => [...currentCart, item]);
      });
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">
            <h1>Serena</h1>
          </NavLink>
          <div className="header-cart">
            <NavLink to="cart">Cart</NavLink>
            <p>{cart.length}</p>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="products"
          element={<Products handleSubmit={handleSubmit} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
