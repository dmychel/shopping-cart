import { Outlet, NavLink } from "react-router-dom";
import "/src/App.css";

const Root = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Serena</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
