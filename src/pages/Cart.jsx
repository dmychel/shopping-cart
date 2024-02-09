import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Cart = ({ cart, deleteItem }) => {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);

  // subtotal
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      const itemPrice = cart[i].price;
      const rounded = reduceDec(itemPrice);
      sum += rounded;
    }
    setPrice(sum);
  }, [cart]);

  // taxes
  useEffect(() => {
    const calcTaxes = price * 0.0625;
    const rounded = reduceDec(calcTaxes);
    setTaxes(rounded);
  }, [price]);

  // total
  useEffect(() => {
    const calcTotal = price + taxes;
    const rounded = reduceDec(calcTotal);
    setTotal(rounded);
  }, [taxes, price]);

  const reduceDec = (num) => {
    const rounded = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
    }).format(num);
    Number(rounded);
    return Number(rounded);
  };

  return (
    <div className="cart">
      <section className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <span className="delete" onClick={() => deleteItem(item)}>
              &#10005;
            </span>
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
            <span>${price}</span>
          </div>
          <div>
            <span>Delivery</span>
            <span> -- </span>
          </div>
          <div>
            <span>Taxes</span>
            <span>${taxes}</span>
          </div>
          <div>
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
  deleteItem: PropTypes.func,
};

export default Cart;
