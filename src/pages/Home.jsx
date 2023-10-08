import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "Product 1",
      id: "1",
      price: "100",
      imgSrc: "https://picsum.photos/200/300",
    },
    {
      name: "Product 2",
      id: "2",
      price: "150",
      imgSrc: "https://picsum.photos/200/300",
    },
  ];

  const dispatch = useDispatch();

  const addToCardHandler = (options) => {
    toast.success("Added to cart");
    dispatch({
      type: "addToCart",
      payload: options,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="home">
      {/* <h1>Home</h1> */}
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          imgSrc={product.imgSrc}
          name={product.name}
          id={product.id}
          price={product.price}
          handler={addToCardHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="product-card">
      <img src={imgSrc} alt="product" />
      <h3>{name}</h3>
      <p>{id}</p>
      <p>${price}</p>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to cart
      </button>
    </div>
  );
};
export default Home;
