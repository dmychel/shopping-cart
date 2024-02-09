import PropTypes from "prop-types";
const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <section className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <span className="delete">&#10005;</span>
            <img src={item.image} alt="item-preview" />
            <p>{item.title}</p>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </section>
      <section className="checkout">
        <div className="delivery">
          <form>
            <input type="email" placeholder="email address" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Street Address" />
            <input type="text" placeholder="Zip Code" />
            <input type="Country" placeholder="Country" />
          </form>
        </div>
        <div className="summary">
          <div>
            <span>Subtotal</span>
            <span>0</span>
          </div>
          <div>
            <span>Delivery</span>
            <span>0</span>
          </div>
          <div>
            <span>Taxes</span>
            <span>0</span>
          </div>
          <div>
            <span>Total</span>
            <span>0</span>
          </div>
        </div>
      </section>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
