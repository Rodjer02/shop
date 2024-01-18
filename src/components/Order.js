import React from "react";

function Order({ order }) {
  return (
    <div className="item">
      <img src="" />
      <h2>{order.title}</h2>
      <b>{order.price}$</b>
    </div>
  );
}

export default Order;
