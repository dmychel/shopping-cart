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

  // form submition
  const handleSubmit = (e, item, quantity) => {
    e.preventDefault();

    const newItem = {
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: Number(quantity),
    };
    scanItem(newItem);
  };

  // determine if item has quanity greater than 1
  const scanItem = (item) => {
    if (item.quantity > 1) {
      const arr = duplicateItem(item);
      addToCart(arr);
    } else {
      item.id = crypto.randomUUID();
      addToCart(item);
    }
  };

  // duplicate item in array
  const duplicateItem = (item) => {
    let arr = [];
    for (let i = 0; i < item.quantity; i++) {
      const dupItem = { ...item };
      dupItem.quantity = 1;
      dupItem.id = crypto.randomUUID();
      arr.push(dupItem);
    }
    return arr;
  };

  // add to cart
  const addToCart = (product) => {
    if (product instanceof Array) {
      product.map((item) => {
        setCart((currentCart) => [...currentCart, item]);
      });
    } else {
      setCart([...cart, product]);
    }
  };

  // delete item from cart
  const deleteItem = (item) => {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
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
            <span>{cart.length}</span>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={<Products handleSubmit={handleSubmit} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} deleteItem={deleteItem} />}
          />
          <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <nav>
          <NavLink to="help">Help</NavLink>
          <a
            href="https://github.com/dmychel/shopping-cart"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/icons/github.png"
              alt="Github"
              title="repo for project"
            />
          </a>

          <a
            href="https://dyloncrowley.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/icons/resume.png"
              alt="Portfolio"
              title="portfolio"
            />
          </a>
        </nav>
      </footer>
    </BrowserRouter>
  );
}

export default App;
