import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>
        A safe haven for your shopping desires
      </h2>
      <div className="hero">
        <img src="/assets/imgs/hero.jpg" alt="Hero Image" />
      </div>
      <NavLink to="products">Shop Now</NavLink>
    </section>
  );
};

export default Home;
