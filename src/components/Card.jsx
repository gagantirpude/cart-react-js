import React from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const { cartItems, subTotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({ type: "deleteHandler", payload: id });
    dispatch({ type: "calculatePrice" });
    toast.error("Item Deleted");
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imgSrc={item.imgSrc}
                qty={item.quantity}
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
              />
            );
          })
        ) : (
          <h1 style={{ color: "white" }}>Cart is Empty</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal : ${subTotal} </h2>
        <h2>Shipping : ${shipping} </h2>
        <h2>Tax : ${tax} </h2>
        <h2>Total : ${total} </h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  name,
  id,
  price,
  imgSrc,
  qty,
  decrement,
  increment,
  deleteHandler,
}) => {
  return (
    <div className="cart-item">
      <img src={imgSrc} alt="item" />
      <article>
        <h2>{name}</h2>
        <p>{qty}</p>
        <p>${price}</p>
      </article>
      <div className="btn-container">
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default Card;
