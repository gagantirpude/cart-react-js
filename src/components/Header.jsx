import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useSelector((state) => state.cart.cartItems);
  return (
    <nav>
      <h2>CARD</h2>
      <main>
        <Link to="/">Home</Link>
        <Link to="/card">
          <FiShoppingBag />
          {/* // for showing Cart length means how much product in cart*/}
          <p>{data.length}</p>
        </Link>
      </main>
    </nav>
  );
};

export default Header;
