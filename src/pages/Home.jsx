import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src="/assets/imgs/hero.jpg" alt="Hero Image" />
      </div>
      <NavLink to="products">Shop Now</NavLink>
    </section>
  );
};

export default Home;
