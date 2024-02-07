import PropTypes from "prop-types";
// js functions
import fetchApiCall from "../services/fetchApiCall";
import { useEffect, useState } from "react";

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
        <p key={crypto.randomUUID()}>{item.title}</p>
      ))}
    </div>
  );
};

Products.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Products;
