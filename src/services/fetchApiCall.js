const fetchApiCall = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=9");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    alert("There was an unexpected error");
  }
};

export default fetchApiCall;
