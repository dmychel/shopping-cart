import PropTypes from "prop-types";

const Products = ({ cart, setCart }) => {
  console.log(cart);
  return <h1>Products</h1>;
};

Products.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Products;
