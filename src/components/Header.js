import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

function Header({ orders }) {
  let [cartOpen, setCartOpen] = useState(false);
  const showOrders = (orders) => {
    return (
      <div>
        {orders.map((el) => (
          <Order key={el.id} order={el} />
        ))}
      </div>
    );
  };
  const showNothing = () => {
    return <div className="empathy">Товаров нет</div>;
  };
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;
