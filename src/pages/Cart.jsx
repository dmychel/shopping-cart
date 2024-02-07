import PropTypes from "prop-types";
const Cart = ({ cart }) => {
  console.log(cart);
  return <h1>Cart</h1>;
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
