// props
import PropTypes from "prop-types";

const Products = ({ cart }) => {
  console.log(cart);
  return <h1>Products</h1>;
};

Products.propTypes = {
  cart: PropTypes.array,
};

export default Products;
