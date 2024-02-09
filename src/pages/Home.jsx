import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h2>A safe haven for your shopping desires</h2>
      <div className="hero">
        <img src="/assets/imgs/hero.jpg" alt="Hero Image" />
      </div>
      <NavLink to="products">Shop Now</NavLink>
    </section>
  );
};

export default Home;
