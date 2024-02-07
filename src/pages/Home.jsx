import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <NavLink to="products">Shop Now</NavLink>
    </section>
  );
};

export default Home;
