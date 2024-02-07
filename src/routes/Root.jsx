import { Outlet, NavLink } from "react-router-dom";
import "/src/App.css";

const Root = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Shoppin Cart</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
