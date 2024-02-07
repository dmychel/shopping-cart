import PropTypes from "prop-types";
import { useState } from "react";

const Item = ({ item, handleSubmit }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <img src={item.image} alt="item preview" />
      <p>{item.price}</p>
      <p>{item.title}</p>
      <form onSubmit={(e) => handleSubmit(e, item, quantity)}>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input type="submit" className="submit" />
      </form>
    </>
  );
};

Item.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  item: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default Item;
