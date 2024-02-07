// props
import PropTypes from "prop-types";

// js functions
import fetchApiCall from "../../services/fetchApiCall";

// react
import { useEffect, useState } from "react";

// components
import Item from "./Item";

const Products = ({ cart, setCart }) => {
  const [productsArr, setProductsArr] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const arr = await fetchApiCall();
    return setProductsArr(arr);
  };

  return (
    <div className="products">
      {productsArr.map((item) => (
        <div className="card" key={item.id}>
          <Item cart={cart} setCart={setCart} item={item} />
        </div>
      ))}
    </div>
  );
};

Products.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Products;
