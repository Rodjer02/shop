import React from "react";
import { FaTrash } from "react-icons/fa";

function Order({ order, onDelete }) {
  return (
    <div className="order-item item">
      <div className="order-img">
        <img src={order.image} />
      </div>
      <div className="order-info">
        <h2 className="product-title">{order.title}</h2>
        <div className="order-info-bottom">
          <b className="oreder-price">{order.price}$</b>
          <button
            className="delete-icon hover"
            onClick={() => onDelete(order._id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
